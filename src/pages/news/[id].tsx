import { GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";
import { INewsItem } from "@/types/news.type";

import { request } from "@/lib/datocms";

type INewsDetailsProps = {
  news: {
    news: INewsItem;
  };
};

const NewsDetailsPage: FC<INewsDetailsProps> = ({ news }) => {
  return <div>{news.news.title}</div>;
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
  const NEW_DETAILS_QUERY = `{news(filter: { id: { eq: ${id} } }) 
        {
            id
            title
            date
            description
            image {
                url
                title
                alt
            }
        }
    }`;

  const data = await request({
    query: NEW_DETAILS_QUERY,
    variables: { limit: 10 },
  });

  return {
    props: { news: data },
  };
};
