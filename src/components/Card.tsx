import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";


  interface CardVRUProps {
    imageSrc: string;
    imageAlt?: string;
    category: string;
    title: string;
    description: string;
    link?: string;
    linkText?:string;
}

   
  export default function CardVRU({imageSrc,imageAlt,category,title,description,link,linkText}:CardVRUProps) {
    return (
      <section className="container mx-auto px-8 py-20 text-center">
          <Card className="flex-row w-full ">
              <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-r-none">
                  <Image
                      src={imageSrc}
                      alt={imageAlt || "alt image"}
                      className="w-full h-full object-cover"
                      width={600}
                      height={400}
                  />
              </CardHeader>
              <CardBody>
                  <Typography variant="h6" color="red" className="uppercase mb-4">{category}</Typography>
                  <Typography variant="h4" color="blue-gray" className="mb-2">
                      {title}
                  </Typography>
                  <Typography color="gray" className="font-normal mb-8">
                      {description}
                  </Typography>
                  <a href={link} className="inline-block">
                      <Button variant="text" className="flex items-center gap-2">
                      {linkText}
                          <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                      </Button>
                  </a>
              </CardBody>
          </Card>
      </section>
  );
}
  