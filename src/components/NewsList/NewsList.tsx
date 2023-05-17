import { FC } from "react";
import { INewsItem } from "@/types/news.type";

import NewsItem from "../NewsItem/NewsItem";

type INewsListProps = {
  news: INewsItem[];
};

const NewsList: FC<INewsListProps> = ({ news }) => {
  return (
    <ul className="flex flex-wrap gap-3 pt-4">
      {news?.map((item: INewsItem) => (
        <NewsItem key={item.id} news={item} />
      ))}
    </ul>
  );
};

export default NewsList;
