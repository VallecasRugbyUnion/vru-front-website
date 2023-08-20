"use client";
import CardVRU from "@/components/Card";
import { CardsGrid } from "@/components/CardGrid";
import CardItem from "@/components/CardItem";
import DefaultCarousel from "@/components/Carousel";
import CarouselSlideImage, { CarouselSlideVideo } from "@/components/CarouselSlides";
import LogoSectionOne from "@/components/LogoSection";
import { useEffect, useState } from "react";

const slides = [
  {
    assetSrc: "/videos/VRU.mp4",    
    title: "EL BARRIO NECESITA RUGBY",
    description: "Y EL RUGBY NECESITA BARRIO",
    mute:true,
    loop:true,
    buttons: [
      {
        text: "COLABORA",
        color: "red",
        variant: "filled",
        url: "/",
      },
    ],
  }
  ,
  {
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
let contentsCard = [
  {
    img: "/images/escuela.png",
    title: "¡Me quiero unir a la escuela de rugby!",
    desc: "Contamos con categorías para todas y todos.",
    btnTXT: "Mas Info",
    btnUrl: "/",
  },
  {
    img: "/images/fem.png",
    title: "¡Me quiero unir al senior femenino de rugby!",
    desc: "Mujer y rugbier: una combinación imparable. ¿Te unes?",
    btnTXT: "Mas Info",
    btnUrl: "/seniors/femenino",
  },
  {
    img: "/images/masculino.png",
    title: "¡Me quiero unir al senior masculino de rugby!",
    desc: "Esfuerzo y espíritu unidos: magia del senior masculino.",
    btnTXT: "Mas Info",
    btnUrl: "/seniors/masculino",
  },
  {
    img: "/images/touch.png",
    title: "¡Me quiero unir al Touch!",
    desc: "Explora el rugby sin contacto: ¡apúntate y participa!",
    btnTXT: "Mas Info",
    btnUrl: "/seniors/touch",
  },
];

const card = {
  imageSrc: "/images/elbarrio.JPG",
  category: "Personas Socias",
  title: "EMPUJA LA MELEE JUNTO AL VRU",
  description:
    "Únete como persona socia al Vallecas Rugby Unión (VRU) y apoya más que un deporte: respalda un movimiento feminista y social en Vallecas. Con tu colaboración, promovemos valores como el respeto y la solidaridad, y fortalecemos el orgullo de nuestro barrio. Tu contribución hará crecer nuestra misión. ¡Sé el cambio en Vallecas, colabora con VRU!",
  link: "#",
  linkText: "QUIERO COLABORAR",
};
export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <main className="mx-auto">
      {mounted && (
        <DefaultCarousel>
          <CarouselSlideVideo {...slides[0]}></CarouselSlideVideo>
          <CarouselSlideImage {...slides[1]}></CarouselSlideImage>
        </DefaultCarousel>
      )}
      <LogoSectionOne></LogoSectionOne>

      <CardVRU {...card} />
      <CardsGrid
        title={"¡Inscríbete en una de nuestras secciones y únete al club!"}
      >
        {contentsCard.map((card) => (
          <CardItem key={card.title}{...card}></CardItem>
        ))}
      </CardsGrid>
    </main>
  );
}

