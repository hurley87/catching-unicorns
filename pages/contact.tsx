import Layout from '@/components/Layout'
import Image from 'next/image'
import { Lato } from 'next/font/google'
import Header from '@/components/Header';

const lato = Lato({ subsets: ['latin'], weight: "400" })

export default function Contact() {
  return (
    <Layout title="Catching Unicorns | Contact">
        <Header text="Contact" />
    </Layout>
  )
}
