import { createSlice } from "@reduxjs/toolkit";

const personalHomePageSlice = createSlice({
  name: "personalHomepage",
  initialState: {
    respositories: null,
    status: "initial",
  },
  reducers: {
    fetchRepositories: () => ({
      status: "loading",
      respositories: null,
    }),
    fetchRepositoriesSuccess: (_, { payload: respositories }) => ({
      status: "success",
      respositories,
    }),
    fetchRepositoriesError: () => ({
      status: "error",
      respositories: null,
    }),
  },
});
export const { fetchRepositories, fetchRepositoriesSuccess, fetchRepositoriesError } = personalHomePageSlice.actions;

export const selectPersonalHomepageState = (state) => state.personalHomepage;
export const selectRepositories = (state) => selectPersonalHomepageState(state).respositories;
export const selectRepositoriesStatus = (state) => selectPersonalHomepageState(state).status;

export default personalHomePageSlice.reducer;
