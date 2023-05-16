import { FC } from "react";
import Container from "@/components/Container/Container";
import NewsList from "../NewsList/NewsList";

const NewsSection: FC = () => {
  return (
    <Container>
      <div className="py-8" id="news">
        <h2 className="font-bold text-4xl sm:text-5xl text-center text-black">
          Fresh News
        </h2>
        <NewsList />
      </div>
    </Container>
  );
};

export default NewsSection;
