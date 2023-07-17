/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { api } from "../../api/api-slice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: (searchText) => `/books/get-all-books?searchTerm=${searchText}`,
    }),
    createNewBook: builder.mutation({
      query: (data) => ({
        url: "/books/create-new-book",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllBooksQuery, useCreateNewBookMutation } = bookApi;
