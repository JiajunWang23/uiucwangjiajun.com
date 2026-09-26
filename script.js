(function () {
  const links = Array.from(document.querySelectorAll(".section-nav a")).filter((link) =>
    link.getAttribute("href")?.startsWith("#")
  );
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const setActiveLink = () => {
    let active = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= 140) {
        active = section;
      }
    }

    links.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${active.id}`);
    });
  };

  setActiveLink();
  document.addEventListener("scroll", setActiveLink, { passive: true });

  const repoList = document.getElementById("repo-list");
  if (!repoList) return;

  const fallbackRepos = [
    {
      name: "Real-Time Analytics Dashboard",
      description: "Flask, React, Redis, WebSocket, PostgreSQL, Docker, and Kubernetes.",
      html_url: "https://github.com/JiajunWang23",
      language: "Python / JavaScript"
    },
    {
      name: "EventStream Platform",
      description: "Spring Boot and Kafka event pipeline with GraphQL APIs and CI/CD.",
      html_url: "https://github.com/JiajunWang23",
      language: "Java"
    }
  ];

  const renderRepos = (repos) => {
    repoList.innerHTML = repos
      .slice(0, 4)
      .map((repo) => {
        const description = repo.description || "Public repository on GitHub.";
        const language = repo.language || "Repository";
        return `
          <a class="repo-card" href="${repo.html_url}">
            <strong>${repo.name}</strong>
            <span>${description}</span>
            <span>${language}</span>
          </a>
        `;
      })
      .join("");
  };

  fetch("https://api.github.com/users/JiajunWang23/repos?per_page=8&sort=updated", {
    headers: { Accept: "application/vnd.github+json" }
  })
    .then((response) => {
      if (!response.ok) throw new Error("GitHub API unavailable");
      return response.json();
    })
    .then((repos) => {
      const owned = repos.filter((repo) => !repo.fork);
      renderRepos(owned.length ? owned : fallbackRepos);
    })
    .catch(() => renderRepos(fallbackRepos));
})();
