import { fetchGithubRepos } from "../services/github";
import { useEffect, useState } from "react";
import "../styles/loader.css";
import loaderData from "../data/loaderData";

function Loader({ onFinish }) {

  const [completedTasks, setCompletedTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(-1);
  const [progress, setProgress] = useState(0);
  const [identity, setIdentity] = useState("");
  const [bootComplete, setBootComplete] = useState(false);

  useEffect(() => {

    let cancelled = false;

    async function bootSystem() {

       try {

  const repos = await fetchGithubRepos();

  setRepoCount(repos.length);

} catch (error) {

  console.error("GitHub Error:", error);

  setRepoCount(0);

}

      for (let i = 0; i < loaderData.length; i++) {

        if (cancelled) return;

        setCurrentTask(i);

        await new Promise(resolve =>
          setTimeout(resolve, loaderData[i].delay)
        );

        setCompletedTasks(prev => [...prev, i]);

        setProgress(
          Math.round(((i + 1) / loaderData.length) * 100)
        );

      }

      const name = "KASHVI AGRAWAL";

      for (let i = 1; i <= name.length; i++) {

        if (cancelled) return;

        setIdentity(name.slice(0, i));

        await new Promise(resolve =>
          setTimeout(resolve, 70)
        );

      }

      setBootComplete(true);

    }

    bootSystem();

    return () => {
      cancelled = true;
    };

  }, []);

  useEffect(() => {

    if (!bootComplete) return;

    const continueBoot = () => {

      window.removeEventListener("keydown", continueBoot);
      window.removeEventListener("click", continueBoot);

      onFinish();

    };

    window.addEventListener("keydown", continueBoot);

    window.addEventListener("click", continueBoot);

    const timer = setTimeout(() => {

      onFinish();

    }, 2000);

    return () => {

      clearTimeout(timer);

      window.removeEventListener("keydown", continueBoot);
      window.removeEventListener("click", continueBoot);

    };

  }, [bootComplete]);
const [repoCount, setRepoCount] = useState(0);
  return (

    <div className="loader">

      <div className="terminal">

        <div className="terminal-header">

          <div className="terminal-buttons">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>

          <h2>KA-OS v3.0</h2>

        </div>

        <div className="terminal-body">

          <div className="prompt">
            KA-OS &gt; boot
          </div>

          {loaderData.map((task, index) => {

            if (
              index > currentTask &&
              !completedTasks.includes(index)
            ) return null;

            return (

              <div
                key={task.id}
                className="task-row"
              >

                <span>
                  {task.text}
                </span>

                <span>

                  {completedTasks.includes(index)
  ? task.isRepoCount
    ? `${repoCount} FOUND`
    : "OK"
  : "..."}

                </span>

              </div>

            );

          })}

          <div className="loading-bar">

            <div
              className="loading-fill"
              style={{
                width: `${progress}%`
              }}
            />

          </div>

          <div className="boot-info">

            <p>
              Identity:
            </p>

            <h3>

              {identity}

              <span className="cursor">
                ▋
              </span>

            </h3>

            <p>
              Status:
            </p>

            <h3>

              {bootComplete
                ? "READY"
                : "BOOTING"}

              <span className="cursor">
                ▋
              </span>

            </h3>

            {bootComplete && (

              <div className="continue">

                Press ENTER or CLICK to continue_

              </div>

            )}

          </div>

        </div>

      </div>

    </div>

  );

}

export default Loader;