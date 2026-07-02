import { useEffect, useState } from "react";

const USERNAME = "kashvi147";

export default function useGithubProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      try {
        // Profile
        const profileRes = await fetch(
          `https://api.github.com/users/${USERNAME}`
        );
        const profileData = await profileRes.json();

        // Repositories
        const repoRes = await fetch(
          `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`
        );
        const repos = await repoRes.json();

        // Total stars
        const totalStars = repos.reduce(
          (sum, repo) => sum + repo.stargazers_count,
          0
        );

        // Total forks
        const totalForks = repos.reduce(
          (sum, repo) => sum + repo.forks_count,
          0
        );

        // Languages
        const languageCount = {};

        repos.forEach((repo) => {
          if (!repo.language) return;

          languageCount[repo.language] =
            (languageCount[repo.language] || 0) + 1;
        });

        const languages = Object.entries(languageCount)
          .sort((a, b) => b[1] - a[1])
          .map(([name, count]) => ({
            name,
            count,
          }));

        // Latest repo
        const latestRepo = repos[0];

         const activityScore = Math.min(
  100,
  Math.round(
    profileData.public_repos * 3 +
    totalStars * 2 +
    profileData.followers * 2 +
    totalForks
  )
);

        setProfile({
          ...profileData,

          repos,

          totalStars,

          totalForks,

          latestRepo,

          languages,

          activityScore,
        });

       
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);

  return { profile, loading };
}