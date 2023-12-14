import { Typography } from '@material-tailwind/react';
import { PropsWithChildren } from 'react';

/**
 * Props for the CardsGrid component.
 */
interface CardGridProps {
  /**
   * The title of the CardsGrid.
   */
  title: string;
}

/**
 * A grid of cards with a title.
 * @param {PropsWithChildren<CardGridProps>} props - The props for the CardsGrid component.
 * @returns {JSX.Element} - The CardsGrid component.
 */
export function CardsGrid({ title, children }: PropsWithChildren<CardGridProps>): JSX.Element {
  return (
    <section className="container mx-auto px-8 py-20 text-center">
      <Typography variant="h2" color="blue-gray">
        {title}
      </Typography>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-4">{children}</div>
    </section>
  );
}

export default CardsGrid;
