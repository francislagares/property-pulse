import Image from 'next/image';
import Link from 'next/link';
import {
  FaBath,
  FaBed,
  FaMapMarker,
  FaMoneyBill,
  FaRulerCombined,
} from 'react-icons/fa';
import { Property } from '@/app/models/property';

interface Props {
  property: Property;
}

export const PropertyCard = ({ property }: Props) => {
  const getRateDisplay = () => {
    const { rates } = property;

    if (rates.monthly) {
      return `${rates.monthly.toLocaleString()}/mo`;
    } else if (rates.weekly) {
      return `${rates.weekly.toLocaleString()}/wk`;
    } else if (rates.nightly) {
      return `${rates.nightly.toLocaleString()}/night`;
    }
  };

  return (
    <div className='relative rounded-xl shadow-md'>
      <Image
        src={`/images/properties/${property.images[0]}`}
        alt=''
        height={0}
        width={0}
        sizes='100vw'
        priority={true}
        className='h-auto w-full rounded-t-xl'
      />
      <div className='p-4'>
        <div className='mb-6 text-left md:text-center lg:text-left'>
          <div className='text-gray-600'>{property.type}</div>
          <h3 className='text-xl font-bold'>{property.name}</h3>
        </div>
        <h3 className='absolute right-[10px] top-[10px] rounded-lg bg-white px-4 py-2 text-right font-bold text-blue-500 md:text-center lg:text-right'>
          ${getRateDisplay()}
        </h3>

        <div className='mb-4 flex justify-center gap-4 text-gray-500'>
          <p>
            <FaBed className='mr-2 inline' /> {property.beds}{' '}
            <span className='md:hidden lg:inline'>Beds</span>
          </p>
          <p>
            <FaBath className='mr-2 inline' />
            {property.baths} <span className='md:hidden lg:inline'>Baths</span>
          </p>
          <p>
            <FaRulerCombined className='mr-2 inline' />
            {property.square_feet}{' '}
            <span className='md:hidden lg:inline'>sqft</span>
          </p>
        </div>

        <div className='mb-4 flex justify-center gap-4 text-sm text-green-900'>
          {property.rates.nightly && (
            <p>
              <FaMoneyBill className='mr-2 inline' /> Nightly
            </p>
          )}

          {property.rates.weekly && (
            <p>
              <FaMoneyBill className='mr-2 inline' /> Weekly
            </p>
          )}

          {property.rates.monthly && (
            <p>
              <FaMoneyBill className='mr-2 inline' /> Monthly
            </p>
          )}
        </div>

        <div className='mb-5 border border-gray-100'></div>

        <div className='mb-4 flex flex-col justify-between lg:flex-row'>
          <div className='mb-4 flex gap-2 align-middle lg:mb-0'>
            <FaMapMarker className='mt-1 text-orange-700' />
            <span className='text-orange-700'>
              {' '}
              {property.location.city} {property.location.state}{' '}
            </span>
          </div>
          <Link
            href={`/properties/${property._id}`}
            className='h-[36px] rounded-lg bg-blue-500 px-4 py-2 text-center text-sm text-white hover:bg-blue-600'
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};
