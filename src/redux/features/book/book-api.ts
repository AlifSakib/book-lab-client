import { api } from "../../api/api-slice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => `/books/get-all-books`,
    }),
  }),
});

export const { useGetAllBooksQuery } = bookApi;
