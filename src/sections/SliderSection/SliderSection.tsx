import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import Container from "@/components/elements/Container/Container";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SliderSectionProps } from "@/sections/SliderSection/types";

const SliderSection: FC<SliderSectionProps> = ({ news }) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    dots: false,
    accessibility: false,
    speed: 2000,
    autoplaySpeed: 5000,
    touchMove: false,
    cssEase: "linear",
  };

  return (
    <section className="pt-8">
      <Container>
        <Slider {...settings} className="overflow-hidden">
          {news.map((newsItem) => {
            return (
              <div
                key={newsItem.id}
                className="h-96 lg:h-110 w-60 relative px-1"
              >
                <Image
                  className="mx-auto object-cover h-full w-full"
                  src={newsItem.image.url}
                  alt={newsItem.image.alt}
                  width="400"
                  height="600"
                />
                <div className="absolute bottom-0 left-0 px-1 w-full">
                  <Link href={`news/${newsItem.id}`}>
                    <p className=" px-3 py-1 lg:py-2 text-lg md:text-2xl lg:text-4xl font-bold tracking-tight text-slate-50 dark:text-white line-clamp-1 bg-slate-500 bg-opacity-60 hover:text-slate-200 hover:bg-opacity-60 hover:duration-300">
                      {newsItem.title}
                    </p>
                  </Link>
                </div>
              </div>
            );
          })}
        </Slider>
      </Container>
    </section>
  );
};

export default SliderSection;
