import Layout from '@/components/Layout'
import Image from 'next/image'
import { Lato } from 'next/font/google'
import Header from '@/components/Header';

const lato = Lato({ subsets: ['latin'], weight: "400" })

export default function FAQ() {
  return (
    <Layout title="Catching Unicorns | FAQ">
        <Header text="FAQ" />
    </Layout>
  )
}
