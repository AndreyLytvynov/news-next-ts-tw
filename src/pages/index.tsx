import HeroSection from "@/components/Sections/HeroSection";
import NewsSection from "@/components/Sections/NewsSection";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>News JS</title>
      </Head>
      <HeroSection />
      <NewsSection />
    </>
  );
}
