import React, { FC } from "react";

import MainNav from "@/components/MainNav/MainNaw";
import Container from "@/components/Container/Container";

const Header: FC = () => {
  return (
    <header className="bg-gradient-to-l from-indigo-600 p-4">
      <Container>
        <div className="flex justify-between">
          <h2>LOGO</h2>
          <MainNav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
