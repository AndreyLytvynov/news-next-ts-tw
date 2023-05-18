import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import MainNavigate from "@/components/elements/MainNavigate/MainNavigate";
import Container from "@/components/elements/Container/Container";
import Logo from "@/components/ui/Logo/Logo";

const Header: FC = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <header className="bg-slate-600 h-20 p-4 fixed w-full flex items-center bg-opacity-75">
      <Container>
        <div className="flex justify-between items-center">
          <Logo />
          {currentRoute === "/" ? (
            <MainNavigate />
          ) : (
            <Link
              href={"/"}
              className="text-slate-50 py-4 hover:text-blue-400 hover:duration-300"
            >
              <span>HOME</span>
            </Link>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
