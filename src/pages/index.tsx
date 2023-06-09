import { FC } from "react";

import HeroSection from "@/sections/HeroSection/HeroSection";
import SliderSection from "@/sections/SliderSection/SliderSection";
import NewsSection from "@/sections/NewsSection/NewsSection";

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
    variables: { _first: 20, _skip: 0 },
  });
  return {
    props: { data },
  };
}
