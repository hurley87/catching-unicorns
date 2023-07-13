import Layout from '@/components/Layout';
import { Lato } from 'next/font/google';
import { create } from 'ipfs-http-client';
import { use, useEffect, useState } from 'react';
// import { getIDs } from '@/cadence/scripts/getID_script';
import * as types from '@onflow/types';
import * as fcl from '@onflow/fcl';
// import type * as types from '@onflow/types';
import { getTotalSupply } from '@/cadence/scripts/getTotalSupply_script';
import { getIDs } from '@/cadence/scripts/getID_script';
import { mintNFT } from '@/cadence/transactions/mintNFT_tx';
import { getMetadata } from '@/cadence/scripts/getMetadata_script';
import { supabaseAdmin } from '@/utils';

const lato = Lato({ subsets: ['latin'], weight: '400' });

export default function Buy() {
  const projectId = process.env.NEXT_PUBLIC_INFRA_PROJECT_ID;
  const projectSecret = process.env.NEXT_PUBLIC_INFRA_SECRET;
  const projectIdAndSecret = `${projectId}:${projectSecret}`;
  const [chunk, setChunk] = useState<any>();
  const [user, setUser] = useState<any>();
  const [NFTs, setNFTs] = useState<any[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const { data: chunk, error } = await supabaseAdmin
        .from('cu')
        .select('*')
        .eq('id', 1)
        .single();

      if (error) console.log('error', error);
      else setChunk(chunk);
    };

    fetchTodos();
  }, [supabaseAdmin]);

  const getFromIPFS = async (cid: string) => {
    const decoder = new TextDecoder();
    let content = '';
    for await (const chunk of ipfs.cat(cid)) {
      content += decoder.decode(chunk);
    }
    return content;
  };

  const fetchNFTs = async () => {
    let IDs: string[] = [];

    // Fetch the IDs with our script (no fees or signers necessary)
    try {
      IDs = await fcl.query({
        cadence: `${getIDs}`,
        args: (arg, t) => [arg(user.addr, types.Address)],
      });
    } catch (err) {
      console.log('err', err);
      console.log('No NFTs Owned');
    }

    console.log(IDs);

    const result = await fcl.query({
      cadence: `${getMetadata}`,
      args: (arg, t) => [arg(user.addr, types.Address), arg('2', types.UInt64)],
    });

    console.log(result?.thumbnail);

    const content = await getFromIPFS(result?.thumbnail);

    console.log(content);

    const ipfsObject = JSON.parse(content);

    console.log(ipfsObject);

    const _imageSrc = [];
    try {
      for (let i = 0; i < IDs.length; i++) {
        console.log('COOL');
        console.log(IDs[i].toString());

        if (IDs[i].toString() !== '0') {
          const result = await fcl.query({
            cadence: `${getMetadata}`,
            args: (arg, t) => [
              arg(user.addr, types.Address),
              arg(IDs[i].toString(), types.UInt64),
            ],
          });

          const content = await getFromIPFS(result?.thumbnail);

          console.log(content);

          const ipfsObject = JSON.parse(content);

          console.log(ipfsObject);
          _imageSrc.push(ipfsObject);
        }
      }
    } catch (err) {
      console.log(err);
    }
    console.log('_imageSrc');
    console.log(_imageSrc);
    setNFTs(_imageSrc);
  };

  useEffect(() => {
    // This listens to changes in the user objects
    // and updates the connected user
    fcl.currentUser().subscribe(setUser);
  }, []);

  useEffect(() => {
    // This listens to changes in the user objects
    // and updates the connected user
    if (user) fetchNFTs();
  }, [user]);

  console.log(chunk?.content);

  const ipfs = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
      authorization: `Basic ${Buffer.from(projectIdAndSecret).toString(
        'base64'
      )}`,
    },
  });

  const logIn = () => {
    fcl.authenticate();
  };

  const RenderLogin = () => {
    return (
      <div>
        <button className="cta-button button-glow" onClick={() => logIn()}>
          Log In
        </button>
      </div>
    );
  };

  const handleMint = async () => {
    console.log('Minting');
    let _totalSupply;
    try {
      _totalSupply = await fcl.query({
        cadence: `${getTotalSupply}`,
      });
    } catch (err) {
      console.log(err);
    }

    const _id = parseInt(_totalSupply) + 1;

    const { data: chunk, error } = await supabaseAdmin
      .from('cu')
      .select('*')
      .eq('id', _id)
      .single();

    const content = chunk?.content;
    console.log(content);
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    });

    const data = await response.json();
    const { url } = data;

    console.log(url);

    const mintJson = {
      name: chunk?.title,
      description: chunk?.content,
      image: url,
    };
    console.log('Mint JSON: ', mintJson);
    const uploaded = await ipfs.add(JSON.stringify(mintJson));
    console.log('Uploaded Hash: ', uploaded);
    const path = uploaded.path;
    console.log('Path: ', path);

    try {
      const transactionId = await fcl.mutate({
        cadence: `${mintNFT}`,
        // proposer: fcl.currentUser,
        // payer: fcl.currentUser,

        args: (arg, t) => [
          arg(user.addr, types.Address), //address to which the NFT should be minted
          arg(`Catching Unicorns #${_id.toString()}`, types.String), // Name
          arg(content, types.String), // Description
          arg(path, types.String),
        ],
        limit: 99,
      });
      console.log('Minting NFT now with transaction ID', transactionId);
      const transaction = await fcl.tx(transactionId).onceSealed();
      console.log(
        'Testnet explorer link:',
        `https://testnet.flowscan.org/transaction/${transactionId}`
      );
      console.log(transaction);
      fetchNFTs();
    } catch (error) {
      console.log(error);
      alert('Error minting NFT, please check the console for error details!');
    }
  };

  console.log(NFTs);

  return (
    <Layout title="Catching Unicorns | Author">
      <div className="mx-w-sm"></div>
      {user && user.addr ? (
        <div>
          <button onClick={handleMint}>Generate Image</button>
          {/* grid of 4 */}
          <div className="grid grid-cols-4 gap-4">
            {NFTs.map((NFT, index) => {
              return (
                <div key={index}>
                  <img src={NFT.image} />
                  <p>{NFT.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <RenderLogin />
      )}
    </Layout>
  );
}
