import { FC } from "react";
import Container from "@/components/Container/Container";
import NewsList from "../NewsList/NewsList";

const NewsSection: FC = () => {
  return (
    <Container>
      <NewsList />
    </Container>
  );
};

export default NewsSection;
