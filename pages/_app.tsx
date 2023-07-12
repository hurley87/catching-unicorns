import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import * as fcl from '@onflow/fcl';

fcl.config({
  'flow.network': 'testnet',
  'app.detail.title': 'Catching Unicorns',
  'accessNode.api': 'https://rest-testnet.onflow.org',
  'app.detail.icon': 'https://www.catchingunicorns.ca/Cover.png',
  'discovery.wallet': 'https://fcl-discovery.onflow.org/testnet/authn',
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
