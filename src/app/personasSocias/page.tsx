"use client";
import CardVRU from "@/components/Card/HorizontalCard";
import { CardsGrid } from "@/components/Card/CardGrid";
import VerticalCard from "@/components/Card/VerticalCard";
import MainCarousel from "@/components/Carousel/MainCarousel";
import CarouselSlide, { AssetType } from "@/components/Carousel/CarouselSlide";
import LogoSection from "@/components/Miscellaneous/LogoSection";


const slidesData = [
  {
    type: AssetType.IMAGE,
    assetSrc: "/images/femenino/femCampeonas.jpg",
    assetAlt: "image 1",
    title: "Un barrio y un deporte solidarios. Un barrio, un deporte y todo corazón.",
    description: "Y EL RUGBY NECESITA BARRIO",
    buttons: [],
  }
];

const cardContents = [
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

const mainCardData = {
  imageSrc: "/images/elbarrio.JPG",
  category: "Personas Socias",
  title: "TEMPORADA 23/24",
  description:
    "Vallecas Rugby Unión (VRU) es una club deportivo feminista y con un fuerte carácter social. Nuestro objetivo es llevar el deporte que amamos a las niñas y niños de Vallecas, a sus vecinos y vecinas. Desde el campo de rugby Los Arbolitos, llevaremos el respeto, la solidaridad, la integridad, la disciplina, la pasión y el orgullo de barrio al mundo.",

};
export default function Home() {
  return (
    <main className="mx-auto">
      <MainCarousel>
        {slidesData.map((slide, index) => (
          <CarouselSlide key={index} {...slide} />
        ))}
      </MainCarousel>

      <LogoSection />
      <CardVRU {...mainCardData} />
      <CardsGrid title="¡Inscríbete en una de nuestras secciones y únete al club!">
        {cardContents.map((card) => (
          <VerticalCard key={card.title} {...card} />
        ))}
      </CardsGrid>
    </main>
  );
}
