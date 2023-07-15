const AllBooks = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
        <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
          <a href="/" aria-label="Item" className="mr-3">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
            </div>
          </a>
          <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
            <span className="inline-block">All Books</span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
        </div>
        <form className="flex flex-col items-center lg:w-1/2 mb-4 md:flex-row ">
          <input
            placeholder="Email"
            type="text"
            className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 grid-cols-2 lg:grid-cols-4 lg:row-gap-8">
        <div>
          <img
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Galaxies Orion
          </p>
          <p className="text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src="https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Tunguska event
          </p>
          <p className="text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Yolo ipsum dolor
          </p>
          <p className="text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Curabitur mattis
          </p>
          <p className="text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Leverage agile
          </p>
          <p className="text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Organically grow
          </p>
          <p className="text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
        </div>
      </div>
      <div className="text-center">
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          See more
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default AllBooks;
