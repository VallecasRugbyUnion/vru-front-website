import { CheckIcon } from '@heroicons/react/24/outline';
import { Card, CardBody, Chip, Typography } from '@material-tailwind/react';

export interface PricingCardPropsType {
  title: string;
  price: string[];
  options: string[];
  marked?: boolean;
  priceSubTitle: string;
  subTitle: string;
}

export default function PricingCard({ title, price, options, priceSubTitle, subTitle }: PricingCardPropsType) {
  return (
    <Card placeholder="Placeholder" variant="gradient" color="white">
      <CardBody placeholder="Placeholder" className="text-center">
        <Chip
          value={title}
          color="blue-gray"
          className="mx-auto -mt-9 w-auto rounded-full !bg-blue-gray-50 pt-2 !text-blue-gray-900"
        />
        <Typography placeholder="Placeholder" variant="h1" color="blue-gray" className="mb-2 mt-10 flex justify-center">
          <Typography
            placeholder="Placeholder"
            as="span"
            variant="h5"
            color="blue-gray"
            className="-translate-y-1 self-end"
          >
            {price[1]}
            {price[0]}
          </Typography>
        </Typography>
        <Typography placeholder="Placeholder" as="span" variant="h5" color="blue-gray">
          {priceSubTitle}
        </Typography>

        <Typography placeholder="Placeholder" className="mb-2 mt-10 flex justify-center" variant="h5" color="blue-gray">
          {subTitle}
        </Typography>
        <ul className="my-6 flex flex-col gap-3 pt-6">
          {options.map((option, key) => (
            <li key={key} className="flex items-center gap-2 text-gray-700">
              <CheckIcon className="h-5 w-5 text-inherit" strokeWidth={2} />
              <Typography placeholder="Placeholder" className="font-normal text-inherit">
                {option}
              </Typography>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}
