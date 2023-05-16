import Link from "next/link";
import { FC } from "react";

const SubscribeBtn: FC = () => {
  return (
    <Link
      href={"/sign-up"}
      className="text-center mx-auto px-5 py-3 border-slate-50 border-2 rounded"
    >
      Subscribe
    </Link>
  );
};

export default SubscribeBtn;
