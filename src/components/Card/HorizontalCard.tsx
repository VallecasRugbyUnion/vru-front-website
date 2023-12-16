import { Card, CardHeader, CardBody, Typography, Button } from '@material-tailwind/react';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface HorizontalCardProps {
  imageSrc: string;
  imageAlt?: string;
  category: string;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
}

export default function HorizontalCard({
  imageSrc,
  imageAlt,
  category,
  title,
  description,
  link,
  linkText,
}: HorizontalCardProps) {
  return (
    <section className="container mx-auto px-8 py-20 text-center">
      <Card placeholder="Placeholder" className="col flex w-full lg:flex-row ">
        <CardHeader
          placeholder="Placeholder"
          shadow={false}
          floated={false}
          className="m-0 w-full shrink-0 rounded-r-none lg:w-2/5"
        >
          <Image
            src={imageSrc}
            alt={imageAlt || 'alt image'}
            className="h-full w-full object-cover"
            width={600}
            height={400}
          />
        </CardHeader>
        <CardBody placeholder="Placeholder">
          <Typography placeholder="Placeholder" variant="h6" color="red" className="mb-4 uppercase">
            {category}
          </Typography>
          <Typography placeholder="Placeholder" variant="h4" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography placeholder="Placeholder" color="gray" className="mb-8 font-normal">
            {description}
          </Typography>
          <a href={link} className="inline-block">
            <Button placeholder="Placeholder" variant="text" className="flex items-center gap-2">
              {linkText}
              <ArrowLongRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
          </a>
        </CardBody>
      </Card>
    </section>
  );
}
