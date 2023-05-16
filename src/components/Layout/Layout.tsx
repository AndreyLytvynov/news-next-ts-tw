import { FC, ReactNode } from "react";
import Header from "@/components/Header/Header";

type ILayoutProps = {
  children: ReactNode;
};

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
