import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Lato, Source_Sans_Pro, Libre_Baskerville } from 'next/font/google';
import Link from 'next/link';

const lato = Lato({ subsets: ['latin'], weight: '400' });
const baskerville = Libre_Baskerville({ subsets: ['latin'], weight: '400' });
const sourceSans = Source_Sans_Pro({ subsets: ['latin'], weight: '400' });

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="How Writing Enables the Imagination"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content="How Writing Enables the Imagination"
        />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="How Writing Enables the Imagination"
        />
        <meta property="og:image" content="" />
      </Head>

      <div className="">
        <div className={`${lato.className} text-center py-6`}>
          <Link href="/">
            <div className="max-w-sm mx-auto">
              <h1 className={`${baskerville.className} text-2xl`}>
                Catching Unicorns
              </h1>
              <p className={`${lato.className} text-sm text-gray-500`}>
                How Writing Enables the Imagination
              </p>
            </div>
          </Link>
        </div>
        <div className="uppercase py-1 border border-y-slate-300 w-full">
          <ul
            className={`${sourceSans.className} flex justify-center max-w-3xl mx-auto text-md py-1`}
          >
            <li className="w-full text-center">
              <Link href="/author">Author</Link>
            </li>{' '}
            <li className="w-full text-center">
              <Link href="/reviews">Reviews</Link>
            </li>
            <li className="w-full text-center">
              <Link href="/posts">Posts</Link>
            </li>
            <li className="w-full text-center">
              <Link href="/faq">Faq</Link>
            </li>
            <li className="w-full text-center">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="max-w-4xl px-4 mx-auto">{children}</div>
        <p className={`pt-20 text-center text-xs ${lato.className} pb-4`}>
          &#169; 2023 Catch Unicorns | All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Layout;
