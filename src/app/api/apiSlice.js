import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().localStorage.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "posts",
  baseQuery,
  endpoints: (build) => ({
    getLoggedUser: build.query({
      query: () => "/users/me",
    }),
  }),
});

export const { useGetLoggedUserQuery } = apiSlice;
