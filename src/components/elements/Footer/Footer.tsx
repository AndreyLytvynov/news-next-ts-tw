import { FC } from "react";

import Container from "@/components/elements/Container/Container";

const Footer: FC = () => {
  return (
    <footer className="absolute flex flex-col justify-center bottom-0 w-full bg-slate-500 h-20 text-white text-xs sm:text-lg">
      <Container>
        <p>&#169; 2023 News JS | All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
