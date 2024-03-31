import { apiSlice } from "../api/apiSlice";

export const teamApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTeam: builder.mutation({
      query: (data) => ({
        url: "create-team",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }), 
    }),
    getAllTeams: builder.query({
      query: () => ({
        url: "get-admin-teams",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    deleteTeam: builder.mutation({
      query: (id) => ({
        url: `delete-team/${id}`,
        method: "DELETE",
        credentials: "include" as const,
      }),
    }),
    editTeam: builder.mutation({
      query: ({ id, data }) => ({
        url: `edit-team/${id}`,
        method: "PUT",
        body: data,
        credentials: "include" as const,
      }),
    }),
    getUsersAllTeams: builder.query({
      query: () => ({
        url: "get-teams",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    
    
  }),
});

export const {
  useCreateTeamMutation,
  useGetAllTeamsQuery,
  useDeleteTeamMutation,
  useEditTeamMutation,
  useGetUsersAllTeamsQuery,
} = teamApi;
