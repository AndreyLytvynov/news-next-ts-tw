import { FC } from "react";
import Head from "next/head";

import Header from "@/components/elements/Header/Header";
import Footer from "@/components/elements/Footer/Footer";

import { ILayoutProps } from "@/components/elements/Layout/types";

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>News JS</title>
        <link rel="icon" type="image/x-icon" href="/logo.png"></link>
        <meta
          name="description"
          content="Latest news about JavaScript, development, frameworks, and tools."
        />
        <meta
          name="keywords"
          content="JavaScript, news, development, frameworks, tools"
        />
      </Head>
      <div className="flex h-full min-h-screen flex-col">
        <Header />
        <main className="flex-grow ">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
