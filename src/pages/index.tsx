import { FC } from "react";

import HeroSection from "@/components/sections/HeroSection/HeroSection";
import SliderSection from "@/components/sections/SliderSection/SliderSection";
import NewsSection from "@/components/sections/NewsSection/NewsSection";

import { request } from "@/lib/datocms";

import { INewsItem } from "@/types/news.type";
import { HOMEPAGE_QUERY } from "@/constants/api";

type IHomePageProps = {
  data: {
    allNews: INewsItem[];
  };
};

const HomePage: FC<IHomePageProps> = ({ data }) => {
  const news = data.allNews;

  return (
    <>
      <HeroSection />
      <SliderSection news={news} />
      <NewsSection news={news} />
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
  });
  return {
    props: { data },
  };
}
