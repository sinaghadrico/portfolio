import { ProjectCard } from "@/components";

const works = [
  {
    imgSrc: "/images/teleportdao.png",
    title: "TeleportDAO",
    tags: ["Next.js", "TailwindCSS", "i18n"],
    projectLink: "https://teleportdao.xyz/",
  },
  {
    imgSrc: "/images/teleswap.png",
    title: "TeleSwap",
    tags: ["Next.js", "TailwindCSS", "i18n", "Monorepo"],
    projectLink: "https://teleswap.xyz/",
  },
  {
    imgSrc: "/images/app-teleswap.png",
    title: "TeleSwap DAPP",
    tags: ["Next.js", "TailwindCSS", "i18n", "Monorepo"],
    projectLink: "https://app.teleswap.xyz/",
  },
  {
    imgSrc: "/images/zeema-2.png",
    title: " Zeema Crowdfunding",
    tags: ["Next.js", "TailwindCSS", "i18n", "Monorepo"],
    projectLink: "https://zeema.fund/",
  },
  {
    imgSrc: "/images/flatlay.jpeg",
    title: "Flatlay",
    tags: ["Next.js", "TailwindCSS", "i18n", "Monorepo"],
    projectLink: "https://flatlay.io/",
  },
  {
    imgSrc: "/images/frog.jpeg",
    title: "Frog",
    tags: ["Next.js", "TailwindCSS", "i18n", "Monorepo"],
    projectLink: "https://app.frogsylvania.com/",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Portfolio Highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {works.map(({ imgSrc, projectLink, tags, title }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              projectLink={projectLink}
              title={title}
              tags={tags}
              className="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
