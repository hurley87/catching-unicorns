import Layout from '@/components/Layout'
import Image from 'next/image'
import { Lato } from 'next/font/google'
import Header from '@/components/Header';

const lato = Lato({ subsets: ['latin'], weight: "400" })

export default function Author() {
  return (
    <Layout title="Catching Unicorns | Author">
        <Header text="Author" />
    </Layout>
  )
}
