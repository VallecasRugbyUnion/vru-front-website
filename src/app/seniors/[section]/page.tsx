import MainCarousel from '@/components/Carousel/MainCarousel';
import CarouselSlide, { CarouselSlideProps } from '@/components/Carousel/CarouselSlide';
import FeatureSection, { FeatureSectionProps } from '@/components/Miscellaneous/FeatureSection';
import { PricingGrid, PricingGridPropsType } from '@/components/Pricing/PricingGrid';
import { notFound } from 'next/navigation';

type SeniorPageInfo = {
  slides: CarouselSlideProps[];
  price: PricingGridPropsType;
  generalInfo: FeatureSectionProps;
};
const sectionsAvailable = ['masculino', 'femenino', 'touch'];

export default async function Page({ params }: { params: { section: string } }) {
  if (!sectionsAvailable.includes(params.section)) {
    notFound();
  }

  const res = await fetch(process.env.URL + '/api/seniors/' + params.section, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    next: { revalidate: 0 },
  });

  const data: SeniorPageInfo = await res.json();
  return (
    <main className="mx-auto">
      <MainCarousel>
        {data.slides.map((slide, index) => (
          <CarouselSlide key={index} {...slide}></CarouselSlide>
        ))}
      </MainCarousel>
      <FeatureSection {...data.generalInfo} />
      <PricingGrid {...data.price} />
    </main>
  );
}
