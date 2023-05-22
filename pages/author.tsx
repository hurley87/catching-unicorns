import Layout from '@/components/Layout';
import { Lato } from 'next/font/google';
import Header from '@/components/Header';
import Image from 'next/image';

const lato = Lato({ subsets: ['latin'], weight: '400' });

export default function Author() {
  return (
    <Layout title="Catching Unicorns | Author">
      <Header text="About The Author" />
      <div className="pb-14">
        <div
          className={`py-10 text-gray-600 ${lato.className} max-w-xl mx-auto`}
        >
          <Image
            src="/Headshot.jpg"
            alt="bill hurley pic"
            width={200}
            height={250}
            className="mr-6 md:float-left rounded-md"
          />
          <p className="pt-4 text-sm">
            Bill Hurley (BSc, MBA, PhD) is a Professor of Applied Mathematics in
            the Department of Mathematics and Computer Science at the Royal
            Military College of Canada. His research interests are in decision
            analysis, game theory, defence analytics, and cognitive science.
            He’s held NSERC funding continuously over his career and has
            published over 125 refereed papers.
          </p>
          <p className="pt-3 text-sm">
            He has two sons, David and Matthew, two grandchildren, Alice and
            Evelyn, and lives with his wife Deb and Basset hound Miss Lily in
            Kingston, Ontario, Canada.
          </p>
        </div>
      </div>
    </Layout>
  );
}
