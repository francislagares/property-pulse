import { PropertyCard } from '@/components';
import properties from 'properties.json';

const PropertiesPage = () => {
  return (
    <section className='px-4 py-6'>
      <div className='container-xl m-auto px-4 py-6 lg:container'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          {properties.length === 0 && <p>No properties found</p>}
          {properties.map(property => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesPage;
