"use client"
import React from "react";
import { Typography, Card } from "@material-tailwind/react";
import PricingCard, { PricingCardPropsType } from "./PricingCard";


export interface PricingGridPropsType {
  title: string;
  subTitle: string;
  description: string;
  pricingCards: PricingCardPropsType[];
}


export function PricingGrid({title, subTitle,description,pricingCards}:PricingGridPropsType) {
  return (
    <section className="p-4">
      <Card
        shadow={false}
        className="via-light-gray-900 min-h-[50vh] rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 px-8 py-24"
      >
        <div className="container mx-auto text-center">
          <Typography variant="h2" color="white" className="mb-4">
            {title}
          </Typography>
          <Typography variant="lead" color="white" className="mb-8 opacity-70">
            {subTitle}
          </Typography>
          <Typography variant="h3" color="white" className="mb-8 opacity-70">
            {description}
          </Typography>
        </div>
      </Card>
      <div className="-mt-32 px-8 pt-8 pb-16">
        <div className={`container mx-auto grid gap-10 md:grid-cols-${pricingCards.length} lg:grid-cols-${pricingCards.length}`}>
          {pricingCards?.map((props, key) => (
            <PricingCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingGrid;
