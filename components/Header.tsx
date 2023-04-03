import React from 'react';
import { Lato } from 'next/font/google'

const lato = Lato({ subsets: ['latin'], weight: "400" })

type Props = {
  text?: string;
};

const Header = ({ text }: Props) => {
  return (
    <h1 className={`${lato.className} text-center uppercase pt-10 pb-6 border border-t-0 border-x-0 border-black text-xl`}>{text}</h1>
  );
};

export default Header;
