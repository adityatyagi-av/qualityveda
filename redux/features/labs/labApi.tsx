import { apiSlice } from "../api/apiSlice";

export const labApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsersAllLabs: builder.query({
      query: () => ({
        url: "get-labs",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    createLab: builder.mutation({
      query: (data) => ({
        url: "create-lab",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }), 
    }),
    getAllLabs: builder.query({
      query: () => ({
        url: "get-admin-labs",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    deleteLab: builder.mutation({
      query: (id) => ({
        url: `delete-lab/${id}`,
        method: "DELETE",
        credentials: "include" as const,
      }),
    }),
    editLab: builder.mutation({
      query: ({ id, data }) => ({
        url: `edit-lab/${id}`,
        method: "PUT",
        body: data,
        credentials: "include" as const,
      }),
    }),
    
    
    
  }),
});

export const {
  useCreateLabMutation,
  useGetAllLabsQuery,
  useDeleteLabMutation,
  useEditLabMutation,
  useGetUsersAllLabsQuery,
} = labApi;
