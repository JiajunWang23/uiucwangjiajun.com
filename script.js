/* ------------------------------------------------------------------
   Site content. Edit the objects below to update the page.
------------------------------------------------------------------- */

const siteData = {
  heroName: "Jiajun Wang",
  heroEyebrow: "Software Engineer · Backend, Cloud & AI Tools",
  heroStatement: "I build backend systems where data, cloud infrastructure, and intelligent tools meet.",
  heroSubtitle: "B.S. in Statistics & Computer Science @ UIUC",
  heroSubtitleHref: "https://stat.illinois.edu/",
  heroLocation: "Chicago, IL",
  portrait: {
    image: "./assets/avatar.jpg",
    fallback: "JW",
  },
  heroLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jiajun-w-814867365/", icon: "linkedin" },
    { label: "GitHub", href: "https://github.com/JiajunWang23", icon: "github" },
    { label: "Email", href: "mailto:uiucwangjiajun@gmail.com", icon: "email" },
  ],
  industryExperience: [
    {
      company: "ByteDance (TikTok)",
      role: "Software Engineering Intern",
      href: "https://www.tiktok.com/",
      logo: "./assets/tiktok.svg",
      logoAlt: "TikTok logo",
    },
    {
      company: "Amazon Web Services",
      role: "Software Engineering Intern",
      href: "https://aws.amazon.com/",
      logo: "./assets/aws.svg",
      logoAlt: "AWS logo",
    },
    { company: "Aleoga", role: "Data Scientist Intern", mark: "AL", tone: "blue" },
  ],
  homeIntro:
    "Hi there 👋. I am Jiajun Wang, a software engineer who builds backend systems where data, cloud infrastructure, and intelligent tools meet.",
  homeAbout: [
    'I am actively seeking <span class="focus-emphasis">Software Engineer</span> and <span class="focus-emphasis">AI Engineer</span> roles across:<span class="about-focus-list"><span><span class="focus-role">Backend &amp; distributed systems:</span> API design, service orchestration, event-driven architectures, and the test automation that keeps them reliable.</span><span><span class="focus-role">Real-time data platforms:</span> Kafka streaming, Redis pub/sub, WebSocket delivery, and indexed analytical storage for dashboards that stay live.</span><span><span class="focus-role">AI-powered tooling:</span> LLM agents, tool-calling workflows, natural-language data access, and analytics automation that engineers actually enjoy using.</span></span>',
    'Recently I built LLM analytics workflows at ByteDance, Java/Spring Boot router orchestration at AWS, and data science projects that turn product and social metrics into decisions. I also write about engineering, job searching, and building in public on my <a href="/blog">blog</a>.',
  ],
  education: [
    {
      school: "University of Illinois Urbana-Champaign",
      period: "Aug 2022 – May 2026",
      href: "https://illinois.edu/",
      logo: "./assets/uiuc-block-i.png",
      logoAlt: "University of Illinois Block I logo",
      degree:
        'B.S. in <a href="https://stat.illinois.edu/" target="_blank" rel="noreferrer">Statistics</a> and <a href="https://siebelschool.illinois.edu/" target="_blank" rel="noreferrer">Computer Science</a>',
      honors:
        "GPA 3.86 / 4.0 · Distributed Systems, Cloud Infrastructure, Algorithms, Databases, Machine Learning, Computer Networks",
    },
  ],
  skills: [
    "Python",
    "Java",
    "Go",
    "C++",
    "SQL",
    "JavaScript",
    "React",
    "Spring Boot",
    "Node.js",
    "FastAPI",
    "GraphQL",
    "LangChain",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Kafka",
    "AWS",
    "Docker",
    "Kubernetes",
    "PyTorch",
  ],
  experienceIntro:
    "Internships across cloud infrastructure, LLM tooling, and data science — each one focused on shipping systems that are measurable, maintainable, and pleasant for other engineers to use.",
  experience: [
    {
      company: "ByteDance (TikTok)",
      role: "Software Engineering Intern",
      period: "Jun 2026 – Sep 2026",
      stack: ["Go", "Node.js", "LLM", "DouBao", "LangChain", "GraphQL"],
      bullets: [
        "Developed an LLM-powered internal analytics agent with tool-calling workflows for 300+ internal users.",
        "Built backend REST APIs integrating enterprise data sources for real-time automated dashboard generation.",
        "Reduced response time by 30% and operational costs by 50% through backend optimization and workflow tuning.",
      ],
    },
    {
      company: "Amazon Web Services",
      role: "Software Engineering Intern",
      period: "May 2025 – Aug 2025",
      stack: ["Java", "Spring Boot", "EventBridge", "Lambda", "ECS", "DynamoDB"],
      bullets: [
        "Engineered a distributed router orchestration service replacing manual lab router testing workflows.",
        "Designed REST APIs for provisioning and retrieving emulated routers on demand through automated CI/CD pipelines.",
        "Persisted router lifecycle metadata in DynamoDB, streamlining test setup and saving 30+ minutes per workflow.",
      ],
    },
    {
      company: "Aleoga",
      role: "Data Scientist Intern",
      period: "Apr 2024 – Jul 2024",
      stack: ["Python", "Matplotlib", "Seaborn", "Data Analysis"],
      bullets: [
        "Analyzed Instagram, Facebook, and Twitter engagement metrics to identify growth trends and campaign opportunities.",
        "Built Python visualizations for interaction quality and advertising effectiveness across social platforms.",
        "Supported a 25% active-user increase, 18% advertising ROI improvement, and 12% marketing cost reduction.",
      ],
    },
  ],
  interests: [
    {
      title: "Backend Infrastructure",
      body: "Distributed services, API design, router orchestration, service lifecycle metadata, and test automation.",
    },
    {
      title: "Real-Time Data Systems",
      body: "Event processing, WebSocket delivery, Redis pub/sub, Kafka streaming, and indexed analytical storage.",
    },
    {
      title: "AI-Powered Tools",
      body: "LLM agents, tool-calling workflows, natural language data access, LangChain, and analytics automation.",
    },
    {
      title: "Cloud & DevOps",
      body: "AWS, Docker, Kubernetes, CI/CD pipelines, GitHub Actions, Jenkins, and production cleanup automation.",
    },
  ],
  projectsIntro:
    "This section brings together the projects that best represent how I think and build, organized by what they do.",
  projectCategories: [
    {
      id: "ai-tools",
      title: "AI Tools",
      copy: "Products and agents that put LLMs to work on real user problems.",
      projects: [
        {
          title: "Stateful AI Agent Platform",
          coverLabel: "AI Agents",
          status: "completed",
          cover: "mint",
          description:
            "Production-style agent runtime: a bounded LangGraph ReAct loop with persistent checkpoints, a streaming React UI over multiplexed WebSockets, and MCP-exposed admin tools gated by SpiceDB.",
          highlights: [
            "Built a LangGraph agent runtime with a bounded ReAct loop for multi-step tool calls, capped at a 10-iteration limit to control usage.",
            "Implemented persistent state checkpoints across 5 workflow stages, enabling interrupted workflows to resume from saved progress.",
            "Developed a React streaming UI over multiplexed WebSockets, supporting 50 concurrent sessions with p95 token delivery under 200ms.",
            "Exposed 22 administrative tools through MCP, propagating caller context into SpiceDB checks to enforce least-privilege access.",
          ],
          tags: ["LangGraph", "React", "WebSockets", "MCP", "SpiceDB"],
          href: "https://github.com/JiajunWang23/stateful-agent-platform",
        },
        {
          title: "PushResume",
          coverLabel: "AI Tools",
          status: "completed",
          cover: "violet",
          description:
            "Free AI-powered resume review and parsing web app that helps candidates improve applications with clearer feedback and faster iteration.",
          tags: ["AI", "Resume Parsing", "Web App", "Product"],
          href: "https://pushresume.net",
        },
        {
          title: "Media Talent Analysis",
          coverLabel: "NLP",
          status: "completed",
          cover: "coral",
          description:
            "Python NLP pipeline analyzing 1K+ job postings to extract skill gaps between media industry needs and university training.",
          tags: ["Python", "NLP", "Data Analysis", "Preprocessing"],
        },
      ],
    },
    {
      id: "systems",
      title: "Systems & Streaming",
      copy: "Event-driven backends and real-time pipelines built to scale.",
      projects: [
        {
          title: "Real-Time Analytics Dashboard",
          coverLabel: "Systems",
          status: "completed",
          cover: "blue",
          description:
            "Flask and React dashboard processing 100K+ daily events with WebSocket updates, Redis pub/sub, and PostgreSQL aggregation.",
          tags: ["Python", "Flask", "React", "Redis", "PostgreSQL", "Docker", "Kubernetes"],
          href: "https://realtime-analytics-dashboard.com",
        },
        {
          title: "EventStream Platform",
          coverLabel: "Streaming",
          status: "completed",
          cover: "gold",
          description:
            "Scalable event-driven platform exposing GraphQL APIs over Kafka streams, MongoDB metadata, and automated CI/CD deployment.",
          tags: ["Java", "Spring Boot", "Kafka", "MongoDB", "GraphQL", "Jenkins"],
        },
      ],
    },
  ],
  contactBooking: [
    {
      label: "Schedule a Coffee Chat",
      detail: "Email me a few time slots and I will confirm a 30-minute conversation.",
      href: "mailto:uiucwangjiajun@gmail.com?subject=Coffee%20Chat&body=Hi%20Jiajun%2C%0A%0AI%27d%20love%20to%20schedule%20a%20coffee%20chat.%20Here%20are%20a%20few%20times%20that%20work%20for%20me%3A%0A%0AThanks%21",
      icon: "calendar",
      tone: "mint",
    },
    {
      label: "Resume Request",
      detail: "Request a copy of my resume without it being exposed publicly on the site.",
      href: "mailto:uiucwangjiajun@gmail.com?subject=Resume%20Request&body=Hi%20Jiajun%2C%0A%0AI%27d%20love%20to%20request%20a%20copy%20of%20your%20resume.%0A%0AHere%20is%20some%20context%20on%20my%20interest%20or%20role%3A%0A%0AThanks%21",
      icon: "resume",
      tone: "slate",
    },
  ],
  contacts: [
    { label: "Email", href: "mailto:uiucwangjiajun@gmail.com", icon: "email" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jiajun-w-814867365/", icon: "linkedin" },
    { label: "GitHub", href: "https://github.com/JiajunWang23", icon: "github" },
    { label: "LeetCode", href: "https://leetcode.com/u/jiajunw7/", icon: "leetcode" },
  ],
  lastUpdated: "Last updated October 15, 2026",
};

const siteChrome = {
  documentTitle: "Jiajun Wang | Software Engineer",
  metaDescription:
    "Jiajun Wang - software engineer focused on backend systems, cloud infrastructure, real-time data, and AI-powered tools.",
  nav: { home: "Home", experience: "Experience", projects: "Projects", blog: "Blog", contact: "Contact" },
  aboutHeading: "About",
  educationHeading: "Education",
  experienceHeading: "Experience",
  interestsHeading: "Technical Interests",
  projectsHeading: "Projects",
  contactHeading: "Connect, coffee chats, and potential opportunities.",
  contactCopy:
    "If you'd like to connect, you can set up a conversation, request my resume privately, or follow up by email or social media.",
  statusCompleted: "Completed",
  statusProgress: "In Progress",
  openProject: "Open project",
};

/* ------------------------------------------------------------------
   Rendering
------------------------------------------------------------------- */

const pick = (value) => value;
const getChrome = () => siteChrome;

const setText = (id, text) => {
  const node = document.getElementById(id);
  if (node && text != null) node.textContent = text;
};

const renderList = (items, renderer, targetId) => {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = (items || []).map(renderer).join("");
};

const iconMarkup = {
  linkedin: `
    <svg viewBox="0 0 24 24" aria-hidden="true" class="hero-link-svg">
      <path fill="currentColor" d="M6.94 8.5H3.56V20h3.38V8.5Zm-1.69-1.56a1.97 1.97 0 1 0 0-3.94 1.97 1.97 0 0 0 0 3.94ZM20 13.04c0-3.46-1.85-5.07-4.33-5.07-1.99 0-2.88 1.09-3.38 1.86V8.5H8.91V20h3.38v-6.4c0-1.69.32-3.32 2.41-3.32 2.06 0 2.09 1.93 2.09 3.43V20H20v-6.96Z" />
    </svg>`,
  github: `
    <svg viewBox="0 0 24 24" aria-hidden="true" class="hero-link-svg">
      <path fill="currentColor" d="M12 .5C5.65.5.5 5.66.5 12.03c0 5.1 3.3 9.41 7.87 10.94.58.1.79-.25.79-.56 0-.28-.01-1.19-.02-2.16-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.97.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.19 1.18a10.98 10.98 0 0 1 5.8 0c2.22-1.49 3.18-1.18 3.18-1.18.64 1.58.24 2.75.12 3.04.74.8 1.18 1.82 1.18 3.08 0 4.44-2.68 5.41-5.24 5.7.41.36.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.67.8.56A11.54 11.54 0 0 0 23.5 12.03C23.5 5.66 18.35.5 12 .5Z" />
    </svg>`,
  email: `
    <svg viewBox="0 0 24 24" aria-hidden="true" class="hero-link-svg">
      <path fill="currentColor" d="M3 5.5h18A1.5 1.5 0 0 1 22.5 7v10A1.5 1.5 0 0 1 21 18.5H3A1.5 1.5 0 0 1 1.5 17V7A1.5 1.5 0 0 1 3 5.5Zm0 1.74V17h18V7.24l-8.42 6.48a1 1 0 0 1-1.16 0L3 7.24Zm16.19 0H4.81L12 12.77l7.19-5.53Z" />
    </svg>`,
  leetcode: `
    <svg viewBox="0 0 24 24" aria-hidden="true" class="hero-link-svg">
      <path fill="currentColor" d="M14.2 2.4a1 1 0 0 1 1.4 0l.1.1a1 1 0 0 1 0 1.4L8.9 10.7a2.3 2.3 0 0 0 0 3.2l3.8 3.8a2.3 2.3 0 0 0 3.2 0l1.6-1.6a1 1 0 0 1 1.4 0l.1.1a1 1 0 0 1 0 1.4l-1.6 1.6a4.3 4.3 0 0 1-6.1 0l-3.8-3.8a4.3 4.3 0 0 1 0-6.1l6.6-6.9ZM10.5 11h8.3a1 1 0 0 1 1 1v.1a1 1 0 0 1-1 1h-8.3a1 1 0 0 1-1-1V12a1 1 0 0 1 1-1Z" />
    </svg>`,
  location: `
    <svg viewBox="0 0 24 24" aria-hidden="true" class="hero-location-svg">
      <path fill="currentColor" d="M12 2.5a7 7 0 0 0-7 7c0 5.2 5.28 10.78 6.45 11.96a.76.76 0 0 0 1.1 0C13.72 20.28 19 14.7 19 9.5a7 7 0 0 0-7-7Zm0 10.1a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2Z" />
    </svg>`,
  calendar: `
    <svg viewBox="0 0 24 24" aria-hidden="true" class="hero-link-svg">
      <path fill="currentColor" d="M7 2.75a.75.75 0 0 1 1.5 0V4H15V2.75a.75.75 0 0 1 1.5 0V4h1A2.5 2.5 0 0 1 20 6.5v11A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-11A2.5 2.5 0 0 1 6.5 4h1V2.75ZM5.5 9v8.5c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V9h-13Zm13-1.5V6.5c0-.55-.45-1-1-1h-1V6a.75.75 0 0 1-1.5 0v-.5H8.5V6A.75.75 0 0 1 7 6v-.5h-.5c-.55 0-1 .45-1 1v1h13Zm-9.75 3.25h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5Zm0 3.5h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5Z" />
    </svg>`,
  resume: `
    <svg viewBox="0 0 24 24" aria-hidden="true" class="hero-link-svg">
      <path fill="currentColor" d="M7 3.5h7.38c.4 0 .78.16 1.06.44l2.62 2.62c.28.28.44.66.44 1.06V18.5A2.5 2.5 0 0 1 16 21H8a2.5 2.5 0 0 1-2.5-2.5v-12A3 3 0 0 1 8.5 3.5H7Zm8 1.81V7h1.69L15 5.31ZM8.5 5A1.5 1.5 0 0 0 7 6.5v12c0 .55.45 1 1 1h8a1 1 0 0 0 1-1V8.5H14.5A1.5 1.5 0 0 1 13 7V5H8.5Zm.25 5.25h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5Zm0 3.5h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5Zm0 3.5h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5Z" />
    </svg>`,
};

const markBadge = (item, extraClass = "") =>
  item.logo
    ? `<img class="${extraClass}" src="${item.logo}" alt="${pick(item.logoAlt) || ""}">`
    : `<span class="mark-badge mark-badge--${item.tone || "slate"} ${extraClass}" aria-hidden="true">${item.mark}</span>`;

const renderShellText = () => {
  const chrome = getChrome();
  setText("nav-home", chrome.nav.home);
  setText("nav-experience", chrome.nav.experience);
  setText("nav-projects", chrome.nav.projects);
  setText("nav-blog", chrome.nav.blog);
  setText("nav-contact", chrome.nav.contact);
  setText("about-heading", chrome.aboutHeading);
  setText("education-heading", chrome.educationHeading);
  setText("experience-heading", chrome.experienceHeading);
  setText("interests-heading", chrome.interestsHeading);
  setText("projects-heading", chrome.projectsHeading);
  setText("contact-heading", chrome.contactHeading);
  setText("contact-copy", chrome.contactCopy);
  setText("experience-intro", pick(siteData.experienceIntro));
  setText("projects-intro", pick(siteData.projectsIntro));
  setText("footer-updated", pick(siteData.lastUpdated));
  document.title = chrome.documentTitle;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute("content", chrome.metaDescription);
};

const renderHero = () => {
  setText("hero-name", pick(siteData.heroName));
  setText("hero-eyebrow", pick(siteData.heroEyebrow));
  setText("hero-statement", pick(siteData.heroStatement));

  const subtitle = document.getElementById("hero-subtitle");
  if (subtitle) {
    subtitle.textContent = pick(siteData.heroSubtitle);
    if (siteData.heroSubtitleHref) {
      subtitle.href = siteData.heroSubtitleHref;
      subtitle.target = "_blank";
      subtitle.rel = "noreferrer";
    }
  }

  const location = document.getElementById("hero-location");
  if (location) {
    location.innerHTML = `<span class="hero-location-icon">${iconMarkup.location}</span>${pick(siteData.heroLocation)}`;
  }

  renderList(
    siteData.industryExperience,
    (item) => {
      const inner = `
        ${markBadge(item, "recent-logo")}
        <span class="recent-copy">
          <strong>${pick(item.company)}</strong>
          <span>${pick(item.role)}</span>
        </span>`;
      return item.href
        ? `<a class="recent-item" href="${item.href}" target="_blank" rel="noreferrer">${inner}</a>`
        : `<div class="recent-item">${inner}</div>`;
    },
    "hero-industry-list",
  );

  const renderLink = (link) => `
    <a class="hero-link" href="${link.href}" target="_blank" rel="noreferrer">
      <span class="hero-link-icon">${iconMarkup[link.icon] || ""}</span>
      <span class="hero-link-text">${pick(link.label)}</span>
    </a>`;
  renderList(siteData.heroLinks, renderLink, "hero-link-row");
  renderList(siteData.contacts, renderLink, "contact-links");

  const portrait = document.getElementById("hero-portrait-image");
  const fallback = document.getElementById("hero-portrait-fallback");
  if (portrait && siteData.portrait.image && !portrait.dataset.bound) {
    portrait.dataset.bound = "true";
    portrait.addEventListener("load", () => {
      portrait.classList.add("is-visible");
      if (fallback) fallback.classList.add("is-hidden");
    });
    portrait.addEventListener("error", () => {
      portrait.classList.remove("is-visible");
      if (fallback) fallback.classList.remove("is-hidden");
    });
    portrait.src = siteData.portrait.image;
  }
  if (fallback) fallback.textContent = siteData.portrait.fallback;
};

const renderAbout = () => {
  const intro = document.getElementById("home-intro-content");
  if (intro) intro.innerHTML = `<p>${pick(siteData.homeIntro)}</p>`;

  const about = document.getElementById("home-about-content");
  if (about)
    about.innerHTML = pick(siteData.homeAbout)
      .map((paragraph) => `<p>${paragraph}</p>`)
      .join("");

  renderList(
    siteData.education,
    (item) => `
      <article class="education-entry">
        ${item.href ? `<a class="education-logo-link" href="${item.href}" target="_blank" rel="noreferrer" aria-label="${pick(item.school)}">${markBadge(item, "education-logo")}</a>` : markBadge(item, "education-logo")}
        <div class="education-copy">
          <h4>${item.href ? `<a href="${item.href}" target="_blank" rel="noreferrer">${pick(item.school)}</a>` : pick(item.school)}</h4>
          <p class="education-degree">${pick(item.degree)}</p>
          ${item.minor ? `<p class="education-minor">${pick(item.minor)}</p>` : ""}
          ${item.honors ? `<p class="education-honors">${pick(item.honors)}</p>` : ""}
        </div>
        <p class="education-period">${pick(item.period)}</p>
      </article>`,
    "education-list",
  );

  renderList(siteData.skills, (skill) => `<span class="tag">${skill}</span>`, "home-skills");
};

const renderExperience = () => {
  renderList(
    siteData.experience,
    (item) => `
      <article class="experience-item">
        <div class="experience-when">
          <p class="experience-period">${pick(item.period)}</p>
        </div>
        <div class="experience-body">
          <h3>${pick(item.role)}</h3>
          <p class="experience-company">${pick(item.company)}</p>
          <ul class="experience-bullets">
            ${pick(item.bullets)
              .map((bullet) => `<li>${bullet}</li>`)
              .join("")}
          </ul>
          <div class="tag-list">${item.stack.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
        </div>
      </article>`,
    "experience-list",
  );

  renderList(
    siteData.interests,
    (item, index) => `
      <article class="focus-card">
        <span class="focus-index">0${index + 1}</span>
        <h3>${pick(item.title)}</h3>
        <p>${pick(item.body)}</p>
      </article>`,
    "interests-grid",
  );
};

const renderProjects = () => {
  const chrome = getChrome();
  const categories = siteData.projectCategories;

  renderList(
    [{ id: "all", title: "All" }, ...categories],
    (category, index) => `
      <button class="filter-pill${index === 0 ? " is-active" : ""}" type="button" role="tab"
        aria-selected="${index === 0}" data-filter="${category.id}">
        ${pick(category.title)}
      </button>`,
    "projects-nav",
  );

  const projects = categories.flatMap((category) =>
    category.projects.map((project) => ({ ...project, categoryId: category.id, categoryTitle: pick(category.title) })),
  );

  renderList(
    projects,
    (project, index) => {
      const statusClass = project.status === "progress" ? "is-progress" : "is-completed";
      const statusLabel = project.status === "progress" ? chrome.statusProgress : chrome.statusCompleted;
      const tag = project.href ? "a" : "article";
      const linkAttributes = project.href ? ` href="${project.href}" target="_blank" rel="noreferrer"` : "";
      return `
        <${tag} class="project-card project-card--${project.cover || "blue"}${project.highlights ? " project-card--featured" : ""}" data-category="${project.categoryId}"${linkAttributes}>
          <div class="project-topline">
            <span class="project-index">${String(index + 1).padStart(2, "0")}</span>
            <span class="project-category">${project.categoryTitle}</span>
            <span class="project-status ${statusClass}">${statusLabel}</span>
          </div>
          <h3>${pick(project.title)}</h3>
          <p>${pick(project.description)}</p>
          ${
            project.highlights
              ? `<ul class="project-highlights">${project.highlights.map((h) => `<li>${h}</li>`).join("")}</ul>`
              : ""
          }
          <div class="project-footer">
            <div class="tag-list">${project.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
            ${project.href ? `<span class="project-open" aria-hidden="true">↗</span>` : ""}
          </div>
        </${tag}>`;
    },
    "projects-categories",
  );

  const pills = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll(".project-card[data-category]");
  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const filter = pill.dataset.filter;
      pills.forEach((other) => {
        const active = other === pill;
        other.classList.toggle("is-active", active);
        other.setAttribute("aria-selected", String(active));
      });
      cards.forEach((card) => {
        card.classList.toggle("is-hidden", filter !== "all" && card.dataset.category !== filter);
      });
    });
  });
};

const renderContact = () => {
  renderList(
    siteData.contactBooking,
    (item) => `
      <a class="contact-action-card contact-action-card--${item.tone}" href="${item.href}">
        <span class="contact-action-icon">${iconMarkup[item.icon] || ""}</span>
        <span class="contact-action-copy">
          <strong>${pick(item.label)}</strong>
          <span>${pick(item.detail)}</span>
        </span>
      </a>`,
    "contact-booking",
  );
};

const renderSite = () => {
  renderShellText();
  renderHero();
  renderAbout();
  renderExperience();
  renderProjects();
  renderContact();
};

/* ------------------------------------------------------------------
   Motion (tilt + glare on cards)
------------------------------------------------------------------- */

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const setupMotion = () => {
  document.body.classList.toggle("motion-ready", !prefersReducedMotion.matches);

  document.querySelectorAll(".contact-action-card").forEach((card) => {
    if (card.dataset.motionBound) return;
    card.dataset.motionBound = "true";

    card.addEventListener("pointermove", (event) => {
      if (prefersReducedMotion.matches || event.pointerType === "touch") return;
      const bounds = card.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      const xRatio = x / bounds.width - 0.5;
      const yRatio = y / bounds.height - 0.5;
      card.style.setProperty("--tilt-x", `${(-yRatio * 7).toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${(xRatio * 9).toFixed(2)}deg`);
      card.style.setProperty("--glare-x", `${x}px`);
      card.style.setProperty("--glare-y", `${y}px`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
      card.style.removeProperty("--glare-x");
      card.style.removeProperty("--glare-y");
    });
  });
};

/* ------------------------------------------------------------------
   Scroll spy for the sticky nav
------------------------------------------------------------------- */

const navLinks = document.querySelectorAll("[data-section-link]");
const spiedSections = Array.from(navLinks)
  .map((link) => document.getElementById(link.dataset.sectionLink))
  .filter(Boolean);

const setActiveSection = (id) => {
  navLinks.forEach((link) => link.classList.toggle("is-active", link.dataset.sectionLink === id));
};

if ("IntersectionObserver" in window && spiedSections.length) {
  const visible = new Map();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0));
      const best = spiedSections
        .map((section) => [section.id, visible.get(section.id) || 0])
        .sort((a, b) => b[1] - a[1])[0];
      setActiveSection(best && best[1] > 0 ? best[0] : "");
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] },
  );
  spiedSections.forEach((section) => observer.observe(section));
}

const header = document.querySelector(".site-header");
const onScroll = () => header && header.classList.toggle("is-scrolled", window.scrollY > 12);
window.addEventListener("scroll", onScroll, { passive: true });

renderSite();
setupMotion();
onScroll();
prefersReducedMotion.addEventListener("change", setupMotion);
