"use client";
import DefaultCarousel from "@/components/Carousel";
import CarouselSlide, { AssetType } from "@/components/CarouselSlides";
import LogoSectionOne from "@/components/LogoSection";
import { useEffect, useState } from "react";


const slides = [
  {
    type: AssetType.VIDEO,
    assetSrc: "/videos/Socios.mp4",
    assetAlt: "image 1",
    title: "",
    description: "",
    muted: false,
    loop: false,
    buttons: [
      {
        text: "COLABORA",
        color: "red",
        variant: "filled",
        url: "/",
      },
    ],
  },
  {
    type: AssetType.IMAGE,
    assetSrc: "/images/femCampeonas.jpg",
    assetAlt: "image 1",
    title: "EL BARRIO NECESITA RUGBY",
    description: "Y EL RUGBY NECESITA BARRIO",
    buttons: [
      {
        text: "COLABORA",
        color: "red",
        variant: "filled",
        url: "/",
      },
    ],
  }
  
];

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <section>
      {mounted && (
        <DefaultCarousel>
          <CarouselSlide {...slides[0]}></CarouselSlide>
          <CarouselSlide {...slides[1]}></CarouselSlide>
          
        </DefaultCarousel>
      )}
      <LogoSectionOne></LogoSectionOne>
      {children}
    </section>
  );
}
