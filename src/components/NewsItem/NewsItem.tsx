import { FC } from "react";
import Image from "next/image";

import IconArrowRight from "@/components/Icons/IconArrowRight";

import { INewsItem } from "@/types/news.type";

type INewsItemProps = {
  news: INewsItem;
};

const NewsItem: FC<INewsItemProps> = ({ news }) => {
  return (
    <li className="sm:w-[calc(100%/2-0.375rem)] lg:w-[calc(100%/3-0.5rem)] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <Image
          className="rounded-t-lg"
          src="/bg.png"
          alt="Description"
          width={744}
          height={400}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {news.title}
          </h3>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {news.text}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <IconArrowRight />
        </a>
      </div>
    </li>
  );
};

export default NewsItem;
