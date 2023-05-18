import { FC } from "react";

import HeroSection from "@/components/sections/HeroSection/HeroSection";
import NewsSection from "@/components/sections/NewsSection/NewsSection";

import { request } from "@/lib/datocms";

import { INewsItem } from "@/types/news.type";

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
      <NewsSection news={news} />
    </>
  );
};

export default HomePage;

const HOMEPAGE_QUERY = `{
  allNews {
    id
    title
    date
    description
    image {
      url
      title
      alt
    }
  }
}`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
  });
  return {
    props: { data },
  };
}
