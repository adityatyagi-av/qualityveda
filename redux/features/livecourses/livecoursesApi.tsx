import { apiSlice } from "../api/apiSlice";

export const livecoursesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createLiveCourse: builder.mutation({
      query: (data) => ({
        url: "live-create-course",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }),
    }),
    getAllLiveCourses: builder.query({
      query: () => ({
        url: "live-get-admin-courses",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    deleteLiveCourse: builder.mutation({
      query: (id) => ({
        url: `live-delete-course/${id}`,
        method: "DELETE",
        credentials: "include" as const,
      }),
    }),
    editLiveCourse: builder.mutation({
      query: ({ id, data }) => ({
        url: `live-edit-course/${id}`,
        method: "PUT",
        body: data,
        credentials: "include" as const,
      }),
    }),
    getUsersAllLiveCourses: builder.query({
      query: () => ({
        url: "live-get-courses",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    getLiveCourseDetails: builder.query({
      query: (id: any) => ({
        url: `live-get-course/${id}`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    getLiveCourseContent: builder.query({
      query: (id) => ({
        url: `live-get-course-content/${id}`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    
   
    addReviewInLiveCourse: builder.mutation({
      query: ({ review, rating, courseId }: any) => ({
        url: `live-add-review/${courseId}`,
        body: {
          review,
          rating,
        },
        method: "PUT",
        credentials: "include" as const,
      }),
    }),
    addReplyInReview: builder.mutation({
      query: ({ comment, courseId, reviewId }: any) => ({
        url: `live-add-reply`,
        body: {
          comment, courseId, reviewId
        },
        method: "PUT",
        credentials: "include" as const,
      }),
    }),
  }),
});

export const {
  useCreateLiveCourseMutation,
  useGetAllLiveCoursesQuery,
  useDeleteLiveCourseMutation,
  useEditLiveCourseMutation,
  useGetUsersAllLiveCoursesQuery,
  useGetLiveCourseDetailsQuery,
  useGetLiveCourseContentQuery,
  useAddReviewInLiveCourseMutation,
  useAddReplyInReviewMutation
} = livecoursesApi;
