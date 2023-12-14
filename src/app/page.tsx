'use client';
import HorizontalCard from '@/components/Card/HorizontalCard';
import { CardsGrid } from '@/components/Card/CardGrid';
import VerticalCard from '@/components/Card/VerticalCard';
import MainCarousel from '@/components/Carousel/MainCarousel';
import CarouselSlide, { AssetType } from '@/components/Carousel/CarouselSlide';
import LogoSection from '@/components/Miscellaneous/LogoSection';

const slidesData = [
  {
    type: AssetType.VIDEO,
    assetSrc: '/videos/VRU.mp4',
    title: 'EL BARRIO NECESITA RUGBY',
    description: 'Y EL RUGBY NECESITA BARRIO',
    mute: true,
    loop: true,
    buttons: [{ text: 'COLABORA', color: 'red', variant: 'filled', url: '/' }],
  },
  {
    type: AssetType.IMAGE,
    assetSrc: '/images/femenino/femCampeonas.jpg',
    assetAlt: 'image 1',
    title: 'EL BARRIO NECESITA RUGBY',
    description: 'Y EL RUGBY NECESITA BARRIO',
    buttons: [{ text: 'COLABORA', color: 'red', variant: 'filled', url: '/' }],
  },
];

const cardContents = [
  {
    img: '/images/escuela.png',
    title: '¡Me quiero unir a la escuela de rugby!',
    desc: 'Contamos con categorías para todas y todos.',
    btnTXT: 'Mas Info',
    btnUrl: '/',
  },
  {
    img: '/images/fem.png',
    title: '¡Me quiero unir al senior femenino de rugby!',
    desc: 'Mujer y rugbier: una combinación imparable. ¿Te unes?',
    btnTXT: 'Mas Info',
    btnUrl: '/seniors/femenino',
  },
  {
    img: '/images/masculino.png',
    title: '¡Me quiero unir al senior masculino de rugby!',
    desc: 'Esfuerzo y espíritu unidos: magia del senior masculino.',
    btnTXT: 'Mas Info',
    btnUrl: '/seniors/masculino',
  },
  {
    img: '/images/touch.png',
    title: '¡Me quiero unir al Touch!',
    desc: 'Explora el rugby sin contacto: ¡apúntate y participa!',
    btnTXT: 'Mas Info',
    btnUrl: '/seniors/touch',
  },
];

const mainCardData = {
  imageSrc: '/images/elbarrio.JPG',
  category: 'Personas Socias',
  title: 'EMPUJA LA MELEE JUNTO AL VRU',
  description:
    'Únete como persona socia al Vallecas Rugby Unión (VRU) y apoya más que un deporte: respalda un movimiento feminista y social en Vallecas. Con tu colaboración, promovemos valores como el respeto y la solidaridad, y fortalecemos el orgullo de nuestro barrio. Tu contribución hará crecer nuestra misión. ¡Sé el cambio en Vallecas, colabora con VRU!',
  link: '#',
  linkText: 'QUIERO COLABORAR',
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
      <HorizontalCard {...mainCardData} />
      <CardsGrid title="¡Inscríbete en una de nuestras secciones y únete al club!">
        {cardContents.map(card => (
          <VerticalCard key={card.title} {...card} />
        ))}
      </CardsGrid>
    </main>
  );
}
