import { Typography} from "@material-tailwind/react";
import { PropsWithChildren } from "react";

interface CardGridProps {
  title: string;
}

export function CardsGrid({
  title,
  children,
}: PropsWithChildren<CardGridProps>) {
  return (
    <section className="container mx-auto px-8 py-20 text-center">
      <Typography variant="h2" color="blue-gray">
        {title}
      </Typography>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-4">
        {children}
      </div>
    </section>
  );
}

export default CardsGrid;