import Layout from '@/components/Layout';
import { Lato } from 'next/font/google';
import Header from '@/components/Header';

const lato = Lato({ subsets: ['latin'], weight: '400' });
const latoBold = Lato({ subsets: ['latin'], weight: '700' });

export default function Contact() {
  return (
    <Layout title="Catching Unicorns | Contact">
      <Header text="Contact" />
      <div className="pb-32">
        <div className={`py-8 text-gray-600 ${lato.className} text-sm`}>
          <p className={`${latoBold.className} text-sm `}>Personal Email</p>
          <p>william.hurleyrmc@gmail.com</p>
          <p className={`${latoBold.className} text-sm  pt-6`}>Work Email</p>
          <p>hurley-w@rmc.ca</p>
          <p className={`${latoBold.className} text-sm  pt-6`}>Twitter</p>
          <p>https://twitter.com/BillHur45824257</p>
        </div>
      </div>
    </Layout>
  );
}
