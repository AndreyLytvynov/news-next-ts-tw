import { FC } from "react";

import Container from "@/components/elements/Container/Container";

import styles from "@/components/sections/HeroSection/hero.module.css";
import Link from "next/link";

const HeroSection: FC = () => {
  return (
    <section
      className={`${styles.box} bg-cover bg-center h-120 text-slate-50  flex flex-col justify-center items-center`}
      id="subscribe"
    >
      <Container>
        <h1 className="font-bold text-5xl sm:text-7xl text-center mb-10 sm:leading-normal">
          Latest News of JavaScript
        </h1>
        <p className="text-3xl text-center mb-10 hidden sm:block">
          Stay updated on the latest in JavaScript! Explore fresh news, reviews,
          and articles on web development and frontend. Discover new JavaScript
          tools and techniques. Stay ahead with our informative content. Sign up
          now for regular updates and stay connected!
        </p>
        <p className="text-xl text-center mb-10 sm:hidden">
          Stay ahead with our informative content. Sign up now for regular
          updates and stay connected!
        </p>
        <Link
          href={"/subscribe"}
          className="block w-48 mx-auto px-5 py-3 text-center font-bold text-2xl border-slate-50 border-2 rounded hover:text-blue-400 hover:border-blue-400 hover:duration-300"
        >
          Subscribe
        </Link>
      </Container>
    </section>
  );
};

export default HeroSection;
