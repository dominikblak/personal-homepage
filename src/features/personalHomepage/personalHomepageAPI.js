import axios from "axios";
const githubAPIBaseURL = "https://api.github.com";

export const getRepositories = (username) =>
  axios.get(`${githubAPIBaseURL}/users/${username}/repos?sort=created`).then((response) => response.data);
