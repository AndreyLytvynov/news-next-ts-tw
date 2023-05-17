import { FC, ReactNode } from "react";
import Header from "@/components/Header/Header";
import Head from "next/head";

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
      {children}
    </>
  );
};

export default Layout;
