import DefaultCarousel from "@/components/Carousel";
import CarouselSlide, { CarouselSlideProps } from "@/components/CarouselSlides";
import FeatureSectionTwo, {
  FeatureSectionTwoProps,
} from "@/components/FeatureSection2";
import { PricingGrid, PricingGridPropsType } from "@/components/PricingGrid";
import { notFound } from "next/navigation";

type SeniorPageInfo = {
  slides: CarouselSlideProps[];
  price: PricingGridPropsType;
  generalInfo: FeatureSectionTwoProps;
};
const sectionsAvailable = ["masculino", "femenino", "touch"];

export default async function Page({
  params,
}: {
  params: { section: string };
}) {
  if (!sectionsAvailable.includes(params.section)) {
    notFound();
  }

  const res = await fetch(process.env.URL + "/api/seniors/" + params.section, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 0 },
  });

  const data: SeniorPageInfo = await res.json();
  return (
    <main className="mx-auto">
      <DefaultCarousel>
        {data.slides.map((slide, index) => (
          <CarouselSlide key={index} {...slide}></CarouselSlide>
        ))}
      </DefaultCarousel>
      <FeatureSectionTwo {...data.generalInfo} />
      <PricingGrid {...data.price} />
    </main>
  );
}
