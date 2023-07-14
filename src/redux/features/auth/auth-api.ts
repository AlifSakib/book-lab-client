import { Inputs } from "../../../components/auth/register/register";
import { api } from "../../api/api-slice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data: Inputs) => ({
        url: "/user/register",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = authApi;
