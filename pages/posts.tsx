import Layout from '@/components/Layout';
import { Lato } from 'next/font/google';
import Header from '@/components/Header';
import Link from 'next/link';

const lato = Lato({ subsets: ['latin'], weight: '400' });
const latoBold = Lato({ subsets: ['latin'], weight: '700' });

export default function Posts() {
  return (
    <Layout title="Catching Unicorns | Links">
      <Header text="Ideas Worth Sharing" />
      <div className={`py-8 text-gray-600 ${lato.className} text-sm`}>
        <Link href="/posts/why-writing-matters">
          <p className={`${latoBold.className} text-sm text-blue-500`}>
            Why Writing Matters
          </p>
        </Link>
        <p>The power of writing is not fully understood.</p>
      </div>
    </Layout>
  );
}
