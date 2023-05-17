export type INewsItem = {
  date: string;
  description: string;
  id: string;
  text?: string;
  image: {
    alt: string;
    title: string;
    url: string;
  };
  title: string;
};
