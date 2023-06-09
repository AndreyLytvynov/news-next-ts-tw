export const getNewsDetailsQuery = (id: string) => `
  {
    news(filter: { id: { eq: ${id} } }) {
      id
      title
      date
      description
      text
      image {
        url
        title
        alt
      }
      author {
        name
        post
        photo {
          url
          title
        }
      }
    }
  }
`;
