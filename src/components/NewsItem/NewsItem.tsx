import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { truncateString } from "@/helpers/truncateString";
import IconArrowRight from "@/components/Icons/IconArrowRight";

import { INewsItem } from "@/types/news.type";

type INewsItemProps = {
  news: INewsItem;
};

const NewsItem: FC<INewsItemProps> = ({ news }) => {
  return (
    <li className="md:w-[calc(100%/2-0.375rem)] xl:w-[calc(100%/3-0.5rem)] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:h-110 lg:h-100">
      <div className="md:h-1/2">
        <Link href={`news/${news.id}`}>
          <Image
            className="rounded-t-lg h-full object-cover"
            src={news.image.url}
            alt={news.image.alt}
            width={744}
            height={400}
          />
        </Link>
      </div>
      <div className="p-5  md:h-1/2 flex flex-col justify-between">
        <div className="h-4/6">
          <div className="h-1/2 mb-2">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
              {truncateString(news.title, 60)}
            </h3>
          </div>

          <p className=" h-1/2 mb-3 font-normal text-gray-700 dark:text-gray-400">
            {truncateString(news.description, 195)}
          </p>
        </div>

        <div className="h-1/6 flex flex-row items-center justify-between">
          <Link
            href={`news/${news.id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <IconArrowRight />
          </Link>
          <p className="text-slate-400">{news.date}</p>
        </div>
      </div>
    </li>
  );
};

export default NewsItem;
