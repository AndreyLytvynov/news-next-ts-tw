import { FC } from "react";
import { INewsItem } from "@/types/news.type";

import NewsItem from "../NewsItem/NewsItem";

const news: INewsItem[] = [];
for (let i = 1; i <= 20; i++) {
  news.push({
    id: i.toString(),
    title: `News title`,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel suscipit dolorum eius et. Tempora sed doloribus suscipit adipisci in officiis dolorem perferendis quidem corporis, nihil quibusdam ratione. Dignissimos, ipsum quibusdam.`,
    date: "10-12-2023",
  });
}

const NewsList: FC = () => {
  return (
    <ul className="flex flex-wrap gap-3 pt-4">
      {news.map((item: INewsItem) => (
        <NewsItem key={item.id} news={item} />
      ))}
    </ul>
  );
};

export default NewsList;
