"use client";
import MainCarousel from "@/components/Carousel/MainCarousel";
import CarouselSlide, { AssetType } from "@/components/Carousel/CarouselSlide";
import LogoSection from "@/components/Miscellaneous/LogoSection";
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
    assetSrc: "/images/femenino/femCampeonas.jpg",
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

  return (
    <section>


      {children}
    </section>
  );
}
