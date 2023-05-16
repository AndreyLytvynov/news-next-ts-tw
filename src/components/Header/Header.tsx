import React, { FC } from "react";
import Image from "next/image";

import MainNav from "@/components/MainNav/MainNaw";
import Container from "@/components/Container/Container";

const Header: FC = () => {
  return (
    <header className="bg-gradient-to-l from-indigo-700 to-indigo-300 p-4">
      <Container>
        <div className="flex justify-between items-center">
          <Image src={"/logo.svg"} width={70} height={50} alt="logo" />
          <MainNav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
