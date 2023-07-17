/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { api } from "../../api/api-slice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: (searchText) => `/books/get-all-books?searchTerm=${searchText}`,
    }),
  }),
});

export const { useGetAllBooksQuery } = bookApi;
