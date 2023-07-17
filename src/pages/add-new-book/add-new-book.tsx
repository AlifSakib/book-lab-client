const AddNewBook = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Add New book</h1>
        </div>

        <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label htmlFor="email" className="">
              Title
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Title Name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="">
              Author
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Author Name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="">
              Genre
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Genre"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="">
              Review
            </label>
            <div className="relative">
              <textarea
                
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Review"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Add New book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewBook;
