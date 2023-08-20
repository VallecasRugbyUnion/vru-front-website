"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  color,
  variant,
} from "@material-tailwind/react/types/components/button";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface CarouselSlideProps {
  assetSrc: string;
  assetAlt?: string;
  posterSrc?: string;
  muted?: boolean;
  loop?: boolean;
  title: string;
  description: string;
  buttons: {
    text: string;
    color: string;
    variant: string;
    url: string;
  }[];
}

export default function CarouselSlideImage({
  assetSrc,
  assetAlt,
  title,
  description,
  buttons,
}: CarouselSlideProps) {
  return (
    <div className="relative h-full w-full">
      <Image
        src={assetSrc}
        alt={assetAlt || "alt text"}
        className="h-full w-full object-cover"
        width={1920}
        height={640}
      />
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
        <div className="w-3/4 text-center md:w-2/4">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
          >
            {title}
          </Typography>
          <Typography variant="lead" color="white" className="mb-12 opacity-80">
            {description}
          </Typography>
          <div className="flex justify-center gap-2">
            {buttons.map((button, btnIndex) => (
              <Button
                key={btnIndex}
                size="lg"
                color={button.color as color}
                variant={button.variant as variant}
              >
                {button.text}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CarouselSlideVideo({
  assetSrc,
  title,
  description,
  buttons,

}: CarouselSlideProps) {
  const refVideo = useRef<HTMLVideoElement | null>(null);


  return (
    <div className="relative h-full w-full">      
      <video
        src={assetSrc}
        ref={refVideo}
        muted
        loop
        autoPlay
        playsInline
        className="h-full w-full object-cover"
      >
        <source src={assetSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
        <div className="w-3/4 text-center md:w-2/4">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
          >
            {title}
          </Typography>
          <Typography variant="lead" color="white" className="mb-12 opacity-80">
            {description}
          </Typography>
          <div className="flex justify-center gap-2">
            {buttons.map((button, btnIndex) => (
              <Button
                key={btnIndex}
                size="lg"
                color={button.color as color}
                variant={button.variant as variant}
              >
                {button.text}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
