import { FC } from "react";
import Container from "@/components/Container/Container";
import SubscribeBtn from "@/components/Buttons/SubscribeBtn";

const HeroSection: FC = () => {
  return (
    <div
      className="bg-cover bg-center h-120 text-slate-50  flex flex-col justify-center items-center pt-16"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(47, 48, 58, 0.5), rgba(47, 48, 58, 0.5)), url('/bg.png')",
      }}
    >
      <Container>
        <h1 className="font-bold text-4xl sm:text-6xl text-center mb-10">
          Latest News of JavaScript
        </h1>
        <p className="text-xl text-center mb-10 hidden sm:block">
          Stay updated on the latest in JavaScript! Explore fresh news, reviews,
          and articles on web development and frontend. Discover new JavaScript
          tools and techniques. Stay ahead with our informative content. Sign up
          now for regular updates and stay connected!
        </p>
        <p className="text-xl text-center mb-10 sm:hidden">
          Stay ahead with our informative content. Sign up now for regular
          updates and stay connected!
        </p>
        <SubscribeBtn />
      </Container>
    </div>
  );
};

export default HeroSection;
