import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import IconArrowRight from "@/components/ui/Icons/IconArrowRight";

import { INewsItemProps } from "@/components/elements/NewsItem/types";

const NewsItem: FC<INewsItemProps> = ({ news }) => {
  return (
    <li className="md:w-[calc(100%/2-0.375rem)] xl:w-[calc(100%/3-0.5rem)] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:h-110 lg:h-100">
      <div className="md:h-1/2">
        <Image
          className="rounded-t-lg h-full object-cover"
          src={news.image.url}
          alt={news.image.alt}
          width={744}
          height={400}
        />
      </div>
      <div className="p-3 md:h-1/2 flex flex-col justify-between">
        <div className="h-4/6 md:h-5/6">
          <h3 className=" mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
            {news.title}
          </h3>

          <p className=" font-normal text-gray-700 dark:text-gray-400 line-clamp-4 md:line-clamp-6  lg:line-clamp-5">
            {news.description}
          </p>
        </div>
        <div className="mt-3 h-2/6 md:h-1/6 flex flex-row items-center justify-between">
          <Link
            href={`news/${news.id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg text-white bg-blue-800 border-blue-400 hover:text-blue-400 hover:border hover:bg-white hover:duration-400"
          >
            News details
            <IconArrowRight />
          </Link>
          <p className="text-slate-500">{news.date}</p>
        </div>
      </div>
    </li>
  );
};

export default NewsItem;
