import { FC, ReactNode } from "react";

import Header from "@/components/Header/Header";
import Container from "@/components/Container/Container";

type ILayoutProps = {
  children: ReactNode;
};

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <main className="pb-16 px-5 pt-5 bg-gradient-conic h-screen">
          {children}
        </main>
      </Container>
    </>
  );
};

export default Layout;
