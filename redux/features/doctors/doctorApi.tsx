import { apiSlice } from "../api/apiSlice";

export const doctorApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createDoctor: builder.mutation({
      query: (data) => ({
        url: "create-doctor",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }), 
    }),
    getAllDoctors: builder.query({
      query: () => ({
        url: "get-admin-doctors",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    deleteDoctor: builder.mutation({
      query: (id) => ({
        url: `delete-doctor/${id}`,
        method: "DELETE",
        credentials: "include" as const,
      }),
    }),
    editDoctor: builder.mutation({
      query: ({ id, data }) => ({
        url: `edit-doctor/${id}`,
        method: "PUT",
        body: data,
        credentials: "include" as const,
      }),
    }),
    getUsersAllDoctors: builder.query({
      query: () => ({
        url: "get-doctors",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    
    
  }),
});

export const {
  useCreateDoctorMutation,
  useGetAllDoctorsQuery,
  useDeleteDoctorMutation,
  useEditDoctorMutation,
  useGetUsersAllDoctorsQuery,
} = doctorApi;
