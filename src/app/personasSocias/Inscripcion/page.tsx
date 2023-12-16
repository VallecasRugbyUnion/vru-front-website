'use client';
import FeatureSection from '@/components/Miscellaneous/FeatureSection';
import { PricingGrid } from '@/components/Pricing/PricingGrid';
import { TabItem } from '@/components/Miscellaneous/TabItem';
import { TabsGrid } from '@/components/Miscellaneous/TabsGrid';

const priceProps = {
  title: 'Cuota Anual',
  subTitle:
    '¡Forma parte de nuestro equipo! Tu cuota anual cubre la inscripción en la Federación de Rugby de Madrid y una contribución al club.',
  description: '¡Ven y prueba nuestros entrenamientos sin ningún compromiso!',
  pricingCards: [
    {
      title: 'Promocion Femenina',
      price: ['€', '272'],
      priceSubTitle: 'Temporada Completa',
      subTitle: 'Precio especial para chicas que nunca han tenido una ficha de rugby antes.',
      options: [],
    },
    {
      title: 'Senior Femenina',
      price: ['€', '297'],
      priceSubTitle: 'Temporada Completa',
      subTitle: '',
      options: [],
    },
  ],
};

const infoProps = {
  imageUrl: '/images/elbarrio.jpg',
  imageAlt: 'delive instant answers',
  title: 'Entrenamientos',
  subTitle:
    '¡Únete a nuestro equipo senior femenino! Entrenamos dos veces a la semana en el Campo de Rugby Los Arbolitos.',
  schedule: ['Martes de 21 a 23hs', 'Jueves de 20 a 22hs'],
  btnText: 'Cómo llegar?',
  btnLink: 'https://goo.gl/maps/JYCdviXyggiir3xP8',
};

export default function Page() {
  return (
    <main className="mx-auto">
      <TabsGrid id="SeniorInfo" value="infoGeneral">
        <TabItem label="Informacion General" value="infoGeneral">
          <FeatureSection {...infoProps} />
        </TabItem>
        <TabItem label="Cuota Jugadoras" value="cuota">
          <PricingGrid {...priceProps} />
        </TabItem>
      </TabsGrid>
    </main>
  );
}
