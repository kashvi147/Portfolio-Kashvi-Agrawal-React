import { fetchGithubRepos } from "../services/github";

const loaderData = [
  {
    id: 1,
    text: "Initializing Core...",
    delay: 700,
  },
  {
    id: 2,
    text: "Loading Neural Engine...",
    delay: 800,
  },
  {
    id: 3,
    text: "Connecting GitHub API...",
    delay: 700,
  },
  {
    id: 4,
    text: "Fetching Public Repositories...",
    delay: 700,
    isRepoCount: true,
  },
  {
    id: 5,
    text: "Loading Robotics Module...",
    delay: 800,
  },
  {
    id: 6,
    text: "Building Portfolio...",
    delay: 900,
  },
];



export default loaderData;