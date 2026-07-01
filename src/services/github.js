const USERNAME = "kashvi147";

export async function fetchGithubRepos() {
  const response = await fetch(
    `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`
  );

  const repos = await response.json();

  return repos;
}