import { InfoBox } from './InfoBox';

export const InfoBoxWrapper = () => {
  return (
    <section>
      <div className='container-xl m-auto lg:container'>
        <div className='grid grid-cols-1 gap-4 rounded-lg p-4 md:grid-cols-2'>
          <InfoBox
            heading='For Renters'
            backgroundColor='bg-gray-100'
            buttonInfo={{
              text: 'Browse Properties',
              link: '/properties',
              backgroundColor: 'bg-black',
            }}
          >
            Find your dream rental property. Bookmark properties and contact
            owners.
          </InfoBox>
          <InfoBox
            heading='For Property Owners'
            backgroundColor='bg-blue-100'
            buttonInfo={{
              text: 'Add Property',
              link: '/properties/add',
              backgroundColor: 'bg-blue-500',
            }}
          >
            Find your dream rental property. Bookmark properties and contact
            owners.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};
