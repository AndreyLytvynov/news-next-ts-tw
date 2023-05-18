import { FC } from "react";

import NewsItem from "@/components/elements/NewsItem/NewsItem";

import { INewsListProps } from "@/components/elements/NewsList/types";
import { INewsItem } from "@/types/news.type";

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
