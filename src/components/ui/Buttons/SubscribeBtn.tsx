import { FC } from "react";

import Link from "next/link";

const SubscribeBtn: FC = () => {
  return (
    <Link
      href={"/subscribe"}
      className="block w-48 mx-auto px-5 py-3 text-center font-bold text-2xl border-slate-50 border-2 rounded hover:text-blue-400 hover:border-blue-400 hover:duration-300"
    >
      Subscribe
    </Link>
  );
};

export default SubscribeBtn;