"use client"
import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";

interface IconPropsType {
  children: React.ReactNode;
}

export interface FeatureSectionProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  subTitle: string;
  schedule: string[];
  btnText: string;
  btnLink: string;
}

export function FeatureSection({
  imageUrl,
  imageAlt,
  title,
  subTitle,
  schedule,
  btnText,
  btnLink,
}: FeatureSectionProps) {
  return (
    <section className="p-8">
      <div className="container mx-auto mb-20 grid lg:grid-cols-2">
        <Image
          src={imageUrl}
          alt={imageAlt}
          className="h-full w-full rounded-xl object-cover"
          width={920}
          height={700}
        />
        <div className="grid w-full content-center items-center px-10 py-10 pl-10 md:px-16 md:py-16 md:pl-16">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            {title}
          </Typography>
          <Typography variant="h4" className="mb-10 font-normal !text-gray-800">
            {subTitle}
          </Typography>
          <ul className="flex list-disc list-inside flex-col gap-6 font-medium text-gray-800">
            {schedule.map((time, index) => (
              <li key={index}>{time}</li>
            ))}
          </ul>
          <Link href={btnLink} rel="noopener noreferrer" target="_blank" className=" mt-9">
            <Button color="red"> {btnText} </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
