import { FC } from "react";

import Container from "@/components/elements/Container/Container";
import NewsList from "@/components/elements/NewsList/NewsList";

import { INewsItem } from "@/types/news.type";

type INewsSectionProps = {
  news: INewsItem[];
};

const NewsSection: FC<INewsSectionProps> = ({ news }) => {
  return (
    <section className="py-8" id="news">
      <Container>
        <h2 className="font-bold text-4xl sm:text-5xl text-center text-black">
          Fresh News
        </h2>
        <NewsList news={news} />
      </Container>
    </section>
  );
};

export default NewsSection;
