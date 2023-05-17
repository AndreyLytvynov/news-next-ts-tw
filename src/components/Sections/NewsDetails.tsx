import Image from "next/image";
import { FC } from "react";
import { INewsItem } from "@/types/news.type";
import Container from "../Container/Container";
import AuthorNews from "../AuthorNews/AuthorNews";

type INewsDetailsProps = {
  news: INewsItem;
};

const NewsDetails: FC<INewsDetailsProps> = ({ news }) => {
  const paragraphs = news.text?.split("\n") || [];

  return (
    <Container>
      <section className="pt-24 flex flex-col pb-4">
        <Image
          className="items-center object-cover mx-auto mb-4"
          src={news.image.url}
          alt={news.image.alt}
          width={600}
          height={400}
        />
        {news?.autor && <AuthorNews author={news.autor[0]} />}

        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {news.title}
        </h2>
        <div>
          {paragraphs.map((paragraph, index) => (
            <p className="first-letter:pl-10" key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default NewsDetails;
