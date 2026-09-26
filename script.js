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
})();
