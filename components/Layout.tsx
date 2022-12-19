import Head from "next/head";
import Link from "next/link";
import React from "react";
import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";

interface Props {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export default function Layout({ children, title, className }: Props) {
  return (
    <React.Fragment>
      <Head>
        <title>
          {title ? `${title} - Amazona` : "Amazona - eCommerce website"}
        </title>
        <meta name="description" content="E-commerce website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={className}>
        <nav className="h-16 flex justify-between items-center shadow-md backdrop-blur px-4">
          <Link href="/" className="text-lg lg:text-3xl font-bold uppercase">
            Amazona
          </Link>
          <div className="flex space-x-4">
            <Link href="/cart" className="flex items-center md:space-x-2">
              <AiOutlineShopping size={20} />
              <span className="hidden md:inline">Cart</span>
            </Link>
            <Link href="/sign-in" className="flex items-center md:space-x-2">
              <AiOutlineUser size={20} />
              <span className="hidden md:inline">Sign in</span>
            </Link>
          </div>
        </nav>
        <main className="container mx-auto">{children}</main>
        <footer className="flex justify-center items-center h-10 shadow-inner">
          <select className="appearance-none">
            <option value="system">system</option>
            <option value="light">light</option>
            <option value="dark">dark</option>
          </select>
        </footer>
      </div>
    </React.Fragment>
  );
}
