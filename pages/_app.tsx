import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import * as fcl from '@onflow/fcl';

fcl.config({
  'flow.network': 'mainnet',
  'app.detail.title': 'Catching Unicorns',
  'accessNode.api': 'https://rest-mainnet.onflow.org',
  'app.detail.icon': 'https://www.catchingunicorns.ca/Cover.png',
  'discovery.wallet': `https://wallet-v2.blocto.app/${process.env.NEXT_PUBLIC_DAPP_ID}/flow/authn`,
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
