import { useEffect, useState } from "react";
import { fetchGithubRepos } from "../services/github";
import getProjectImage from "../utils/getProjectImage";

export default function useGithubProjects() {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadProjects() {

      try {

        const repos = await fetchGithubRepos();

        const formattedProjects = repos.map((repo) => ({

          id: repo.id,

          title: repo.name,

          description:
            repo.description || "No description provided.",

          github: repo.html_url,

          live: repo.homepage || "",

          category: repo.language || "Project",

          image: getProjectImage(repo),

          tech: [repo.language].filter(Boolean),

          stars: repo.stargazers_count,

          updated: repo.updated_at

        }));

        setProjects(formattedProjects);

      } catch (err) {

        console.error(err);

      } finally {

        setLoading(false);

      }

    }

    loadProjects();

  }, []);

  return { projects, loading };

}