import { FC } from "react";
import { Link } from "react-scroll";

const MainNavigate: FC = () => {
  return (
    <nav>
      <ul className="flex gap-8 text-slate-50 ">
        <li className="cursor-pointer">
          <Link
            to="subscribe"
            smooth={true}
            duration={700}
            className="py-4 hover:text-blue-400 hover:duration-300"
          >
            <span>HOME</span>
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            to="news"
            smooth={true}
            offset={-80}
            duration={700}
            className="py-4 hover:text-blue-400 hover:duration-300"
          >
            <span>NEWS</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigate;
