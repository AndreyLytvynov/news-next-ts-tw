import Link from "next/link";
import { FC } from "react";

const SubscribeBtn: FC = () => {
  return (
    <Link
      href={"/sign-up"}
      className="block w-48 mx-auto px-5 py-3 text-center font-bold text-2xl border-slate-50 border-2 rounded "
    >
      Subscribe
    </Link>
  );
};

export default SubscribeBtn;
