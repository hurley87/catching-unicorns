import Layout from '@/components/Layout';
import Image from 'next/image';
import { Lato } from 'next/font/google';

const latoBold = Lato({ subsets: ['latin'], weight: '700' });
const lato = Lato({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <Layout title="Catching Unicorns | Home">
      <div className={`py-10 text-gray-600 text-sm ${lato.className}`}>
        <Image
          src="/Cover.png"
          alt=""
          width={300}
          height={376}
          className="mr-6 mb-4 float-left"
        />
        <p className={latoBold.className}>
          Will machines ideate like humans? I don’t think so.
        </p>
        <p className="pt-2">
          We came out of the trees millions of years ago, went bipedal, and then
          began working with our hands. Our earliest evidence of this was the
          crude stone tools shaped in Africa some two and half million years
          ago. More recently, we’ve built the Saturn V rocket, painted Girl with
          a Pearl Earring, and coded ChatGPT. We are a very talented ape.
        </p>
      </div>
    </Layout>
  );
}
