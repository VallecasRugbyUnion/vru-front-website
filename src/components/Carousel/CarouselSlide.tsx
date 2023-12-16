'use client';

import { Typography, Button } from '@material-tailwind/react';
import { color, variant } from '@material-tailwind/react/types/components/button';
import Image from 'next/image';

export enum AssetType {
  VIDEO = 'video',
  IMAGE = 'image',
}
export interface CommonSlideProps {
  assetSrc: string;
  title: string;
  description: string;
  buttons: {
    text: string;
    color: string;
    variant: string;
    url: string;
  }[];
}

export interface CarouselSlideProps extends CommonSlideProps {
  type: AssetType;
  assetAlt?: string;
  posterSrc?: string;
  muted?: boolean;
  loop?: boolean;
}

export default function CarouselSlide({
  type,
  assetSrc,
  assetAlt,
  posterSrc,
  muted,
  loop,
  title,
  description,
  buttons,
}: CarouselSlideProps) {
  if (type === AssetType.IMAGE) {
    return imageSlide({ assetSrc, assetAlt, title, description, buttons });
  } else if (type === AssetType.VIDEO) {
    return videoSlide({
      assetSrc,
      posterSrc,
      muted,
      loop,
      title,
      description,
      buttons,
    });
  } else {
    return <div>Unsupported asset type</div>;
  }
}

function videoSlide({
  assetSrc,
  posterSrc,
  title,
  description,
  buttons,
}: CommonSlideProps & { posterSrc?: string; muted?: boolean; loop?: boolean }) {
  return (
    <div className="relative h-full w-full">
      <video src={assetSrc} poster={posterSrc} muted loop autoPlay playsInline className="h-full w-full object-cover">
        <source src={assetSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
        <div className="w-3/4 text-center md:w-2/4">
          <Typography
            placeholder="Placeholder"
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
          >
            {title}
          </Typography>
          <Typography placeholder="Placeholder" variant="lead" color="white" className="mb-12 opacity-80">
            {description}
          </Typography>
          <div className="flex justify-center gap-2">
            {buttons.map((button, btnIndex) => (
              <Button
                placeholder="Placeholder"
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

function imageSlide({ assetSrc, assetAlt, title, description, buttons }: CommonSlideProps & { assetAlt?: string }) {
  return (
    <div className="relative h-full w-full">
      <Image
        src={assetSrc}
        alt={assetAlt || 'alt text'}
        className="h-full w-full object-cover"
        width={1920}
        height={640}
      />
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
        <div className="w-3/4 text-center md:w-2/4">
          <Typography
            placeholder="Placeholder"
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
          >
            {title}
          </Typography>
          <Typography placeholder="Placeholder" variant="lead" color="white" className="mb-12 opacity-80">
            {description}
          </Typography>
          <div className="flex justify-center gap-2">
            {buttons.map((button, btnIndex) => (
              <Button
                placeholder="Placeholder"
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
