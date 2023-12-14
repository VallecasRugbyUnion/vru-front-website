import { Card, CardBody, Typography, Button } from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';

interface VerticalCardPropsType {
  img: string;
  title: string;
  desc: string;
  btnTXT?: string;
  btnUrl?: string;
}

export default function VerticalCard({ img, title, desc, btnTXT, btnUrl }: VerticalCardPropsType) {
  return (
    <Card className="relative grid min-h-[30rem] items-end overflow-hidden rounded-xl" color="transparent">
      <Image
        src={img}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover object-center"
        width={800}
        height={600}
      />
      <div className="absolute inset-0 bg-black/50" />
      <CardBody className="relative flex flex-col justify-end text-center">
        <Typography variant="h4" color="white">
          {title}
        </Typography>
        <Typography variant="paragraph" color="white" className="my-2  text-center font-normal">
          {desc}
        </Typography>
        <Link href={btnUrl || '/'}>
          <Button size="md" color="red">
            {btnTXT}
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
}
