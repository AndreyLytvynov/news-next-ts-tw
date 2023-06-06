import { FC } from "react";
import Head from "next/head";

import Header from "@/components/elements/Header/Header";
import Footer from "@/components/elements/Footer/Footer";

import { ILayoutProps } from "@/Layout/types";

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>News JS</title>
        <link rel='icon' type='image/x-icon' href='/logo.png'></link>
        <meta
          name='description'
          content='Latest news about JavaScript, development, frameworks, and tools.'
        />
        <meta
          property='og:description'
          content='Створюємо і реалізуємо персоналізовані рішення за допомогою сучасних технологій'
        />
        <meta
          property='og:title'
          content='SoftRysen - дизайн і розробка сучасних вебсервісів'
        />
        <meta
          name='keywords'
          content='JavaScript, news, development, frameworks, tools'
        />
        <meta property='og:image' content='/logo.png' />
      </Head>
      <div className='flex h-full min-h-screen flex-col'>
        <Header />
        <main className='flex-grow '>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
