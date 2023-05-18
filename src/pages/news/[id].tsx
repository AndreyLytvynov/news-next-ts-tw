import { FC } from "react";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";

import { request } from "@/lib/datocms";
import { getNewsDetailsQuery } from "@/helpers/getNewsDetailsQuery";

import Container from "@/components/elements/Container/Container";
import AuthorNews from "@/components/elements/AuthorNews/AuthorNews";

import { INewsItem } from "@/types/news.type";

type INewsDetailsProps = {
  news: {
    news: INewsItem;
  };
};

const NewsDetailsPage: FC<INewsDetailsProps> = ({ news }) => {
  const paragraphs = news.news.text?.split("\n") || [];

  return (
    <>
      <section className="pt-24 flex flex-col pb-4">
        <Container>
          <Image
            className="items-center object-cover mx-auto mb-4"
            src={news.news.image.url}
            alt={news.news.image.alt}
            width={600}
            height={400}
          />
          {news.news?.author && <AuthorNews author={news.news.author[0]} />}

          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {news.news.title}
          </h2>
          <div>
            {paragraphs.map((paragraph, index) => (
              <p className="first-letter:pl-10" key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
export default NewsDetailsPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { allNews } = (await request({
    query: `{allNews {id}}`,
    variables: { limit: 10 },
  })) as { allNews: INewsItem[] };

  const paths = allNews.map((news) => {
    return { params: { id: news.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as { id: string };
  const NEW_DETAILS_QUERY = getNewsDetailsQuery(id);

  const data = await request({
    query: NEW_DETAILS_QUERY,
    variables: { limit: 10 },
  });

  return {
    props: { news: data },
  };
};
