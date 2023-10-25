"use client";

import { Carousel } from "@material-tailwind/react";
import { PropsWithChildren } from "react";


interface DefaultCarouselProps {
  autoplay?: boolean;
  autoplayDelay?: number;
  loop?: boolean;
}


export default function MainCarousel({
  autoplay,
  autoplayDelay,
  loop,
  children,
}: PropsWithChildren<DefaultCarouselProps>) {
  return (
    <Carousel
      autoplay={autoplay}
      autoplayDelay={autoplayDelay}
      loop={loop}      
      className="h-[40rem] w-screen"
    >
      {children}
    </Carousel>
  );
}
