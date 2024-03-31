import { apiSlice } from "../api/apiSlice";

export const testimonialApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTestimonial: builder.mutation({
      query: (data) => ({
        url: "create-testimonial",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }), 
    }),
    getAllTestimonials: builder.query({
      query: () => ({
        url: "get-admin-testimonials",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    deleteTestimonial: builder.mutation({
      query: (id) => ({
        url: `delete-testimonial/${id}`,
        method: "DELETE",
        credentials: "include" as const,
      }),
    }),
    editTestimonial: builder.mutation({
      query: ({ id, data }) => ({
        url: `edit-testimonial/${id}`,
        method: "PUT",
        body: data,
        credentials: "include" as const,
      }),
    }),
    getUsersAllTestimonials: builder.query({
      query: () => ({
        url: "get-testimonials",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    
    
  }),
});

export const {
  useCreateTestimonialMutation,
  useGetAllTestimonialsQuery,
  useDeleteTestimonialMutation,
  useEditTestimonialMutation,
  useGetUsersAllTestimonialsQuery,
} = testimonialApi;
