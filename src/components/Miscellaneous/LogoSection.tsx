'use client';
import { Typography } from '@material-tailwind/react';
import Image from 'next/image';

const logos = ['ccvk.png', 'lafrasca.jpeg', 'running.jpeg', 'fisiopolo.jpg'];

export function LogoSection() {
  return (
    <section className="px-8 py-8 lg:py-20">
      <div className="container mx-auto text-center">
        <Typography placeholder="Placeholder" variant="h4" color="blue-gray" className="mb-8">
          Nuestros Patrocinadores
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-9">
          {logos.map((logo, key) => (
            <Image key={key} src={`/logos/${logo}`} alt="logo" className="w-20" width={300} height={300} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoSection;
