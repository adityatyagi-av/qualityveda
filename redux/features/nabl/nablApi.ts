import { apiSlice } from "../api/apiSlice";

export const nablApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    
    getAllNABL: builder.query({
      query: () => ({
        url: "get-queries",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `delete-query/${id}`,
        method: "DELETE",
        credentials: "include" as const,
      }),
    }),
  }),
});

export const {

  useGetAllNABLQuery,
 
  useDeleteUserMutation
} = nablApi;
