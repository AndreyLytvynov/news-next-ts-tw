import { FC, ReactNode } from "react";
import Header from "@/components/Header/Header";
import Head from "next/head";
import Footer from "../Footer/Footer";

type ILayoutProps = {
  children: ReactNode;
};

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
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
