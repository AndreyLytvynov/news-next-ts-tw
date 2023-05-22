import { FC } from "react";

import Container from "@/components/elements/Container/Container";

const Footer: FC = () => {
  return (
    <footer className="flex flex-col justify-center w-full bg-slate-500 h-20 text-white text-xs sm:text-lg">
      <Container>
        <p>&#169; 2023 News JS | All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
