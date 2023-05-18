export const HOMEPAGE_QUERY = `{
  allNews {
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
