import { FC } from "react";
import Head from "next/head";

import HeroSection from "@/components/Sections/HeroSection";
import NewsSection from "@/components/Sections/NewsSection";

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
      <Head>
        <title>News JS</title>
      </Head>
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
