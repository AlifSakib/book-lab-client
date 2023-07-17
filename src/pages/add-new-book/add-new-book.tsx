/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Swal from "sweetalert2";
import { useCreateNewBookMutation } from "../../redux/features/book/book-api";

const AddNewBook = () => {
  const [createBook, { data, isLoading, isError, error, isSuccess }] =
    useCreateNewBookMutation();

  const handleAddBook = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title")?.toString();
    const author = formData.get("author")?.toString();
    const genre = formData.get("genre")?.toString();
    const review = formData.get("review")?.toString();
    const publicationDate = new Date().toISOString();

    //clear form
    e.currentTarget.reset();

    try {
      if (title && author && genre && review && publicationDate) {
        await createBook({ title, author, genre, review, publicationDate });
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isSuccess) {
    void Swal.fire({
      icon: "success",
      title: "Success",
      text: "Book Added Successfully",
    });
  }

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Add New book</h1>
        </div>

        <form
          onSubmit={handleAddBook}
          action=""
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label htmlFor="email" className="">
              Title
            </label>

            <div className="relative">
              <input
                type="text"
                name="title"
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
                name="author"
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
                name="genre"
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
                name="review"
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
