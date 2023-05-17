import Image from "next/image";
import { FC } from "react";
import { INewsItem } from "@/types/news.type";
import Container from "../Container/Container";

type INewsDetailsProps = {
  news: INewsItem;
};

const NewsDetails: FC<INewsDetailsProps> = ({ news }) => {
  return (
    <Container>
      <section className="pt-24 flex flex-col">
        <Image
          className="items-center object-cover mx-auto mb-4"
          src={news.image.url}
          alt={news.image.alt}
          width={600}
          height={400}
        />
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {news.title}
        </h2>
        <p className="first-letter:pl-10">{news.text}</p>
      </section>
    </Container>
  );
};

export default NewsDetails;
