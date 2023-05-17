import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Merriweather } from "next/font/google";
import styles from "@/styles/logo.module.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Logo: FC = () => {
  return (
    <Link href={"/"} className={`flex items-center ${styles.group}`}>
      <Image src={"/js-logo.svg"} width={50} height={30} alt="logo" />
      <p
        className={`text-slate-50 font-bold text-xl sm:text-4xl ${merriweather.className} ${styles.text}`}
      >
        News
      </p>
    </Link>
  );
};

export default Logo;
