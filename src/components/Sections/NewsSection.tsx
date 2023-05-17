import { FC } from "react";
import Container from "@/components/Container/Container";
import NewsList from "../NewsList/NewsList";

import { INewsItem } from "@/types/news.type";

type INewsSectionProps = {
  news: INewsItem[];
};

const NewsSection: FC<INewsSectionProps> = ({ news }) => {
  return (
    <Container>
      <div className="py-8" id="news">
        <h2 className="font-bold text-4xl sm:text-5xl text-center text-black">
          Fresh News
        </h2>
        <NewsList news={news} />
      </div>
    </Container>
  );
};

export default NewsSection;
