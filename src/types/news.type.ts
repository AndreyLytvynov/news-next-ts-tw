export type Author = {
  name: string;
  post: string;
  photo: {
    url: string;
    title: string;
  };
};

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
  author?: Author[];
  title: string;
};
