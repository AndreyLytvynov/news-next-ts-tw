import { FC } from "react";

import { useRouter } from "next/router";

import MainNav from "@/components/MainNav/MainNaw";
import Container from "@/components/Container/Container";
import Logo from "../Icons/Logo";
import Link from "next/link";

const Header: FC = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <header className="bg-slate-600 h-20 p-4 fixed w-full flex items-center bg-opacity-75">
      <Container>
        <div className="flex justify-between items-center">
          <Logo />
          {currentRoute === "/" ? (
            <MainNav />
          ) : (
            <Link href={"/"} className="text-slate-50 py-4 hover:text-blue-400">
              <span>HOME</span>
            </Link>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
