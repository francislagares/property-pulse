export const Hero = () => {
  return (
    /* <!-- Mobile menu button--> */
    <section className='mb-4 bg-blue-700 py-20'>
      <div className='mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
            Find The Perfect Rental
          </h1>
          <p className='my-4 text-xl text-white'>
            Discover the perfect property that suits your needs.
          </p>
        </div>
        <form className='mx-auto mt-3 flex w-full max-w-2xl flex-col items-center md:flex-row'>
          <div className='mb-4 w-full md:mb-0 md:w-3/5 md:pr-2'>
            <label htmlFor='location' className='sr-only'>
              Location
            </label>
            <input
              type='text'
              id='location'
              placeholder='Enter Location (City, State, Zip, etc'
              className='w-full rounded-lg bg-white px-4 py-3 text-gray-800 focus:outline-none focus:ring focus:ring-blue-500'
            />
          </div>
          <div className='w-full md:w-2/5 md:pl-2'>
            <label htmlFor='property-type' className='sr-only'>
              Property Type
            </label>
            <select
              id='property-type'
              className='w-full rounded-lg bg-white px-4 py-3 text-gray-800 focus:outline-none focus:ring focus:ring-blue-500'
            >
              <option value='All'>All</option>
              <option value='Apartment'>Apartment</option>
              <option value='Studio'>Studio</option>
              <option value='Condo'>Condo</option>
              <option value='House'>House</option>
              <option value='Cabin Or Cottage'>Cabin or Cottage</option>
              <option value='Loft'>Loft</option>
              <option value='Room'>Room</option>
              <option value='Other'>Other</option>
            </select>
          </div>
          <button
            type='submit'
            className='mt-4 w-full rounded-lg bg-blue-500 px-6 py-3 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 md:ml-4 md:mt-0 md:w-auto'
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};
