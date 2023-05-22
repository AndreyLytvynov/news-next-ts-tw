export const HOMEPAGE_QUERY = `query HomePageQuery($_first: IntType, $_skip: IntType) {
  allNews(first: $_first, skip: $_skip) {
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
