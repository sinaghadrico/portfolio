import { ProjectCard } from "@/components";

const works = [
  // {
  //   imgSrc: "/images/teleportdao.png",
  //   title: "TeleportDAO",
  //   tags: ["Next.js", "TailwindCSS", "i18n"],
  //   projectLink: "https://teleportdao.xyz/",
  // },
  {
    imgSrc: "/images/works/app-teleswap.png",
    title: "TeleSwap DAPP",
    tags: ["React.js", "Web3", "EVM", "Bitcoin", "TON", "TailwindCSS", "Vite"],
    projectLink: "https://app.teleswap.xyz/",
  },
  {
    imgSrc: "/images/works/teleswap.png",
    title: "TeleSwap",
    tags: ["React.js", "Web3", "EVM", "Bitcoin", "TON", "TailwindCSS", "Vite"],
    projectLink: "https://teleswap.xyz/",
  },
  {
    imgSrc: "/images/works/malek.png",
    title: "Malek",
    tags: ["Next.js", "Zustand", "TailwindCSS", "GSAP", "i18n", "turborepo"],
    projectLink: "https://malek.ir/en",
  },
  {
    imgSrc: "/images/works/astrol.png",
    title: "Astrol DAPP (Lending Protocol)",
    tags: ["Next.js", "Solana", "Web3", "TailwindCSS", "Monorepo"],
    projectLink: "https://app.astrol.io/",
  },
  {
    imgSrc: "/images/works/wallex.png",
    title: "Wallex (Crypto Exchange)",
    tags: ["Next.js", "MUI", "Emotion", "Firebase", "Zustand", "PWA"],
    projectLink: "https://wallex.ir",
  },
  {
    imgSrc: "/images/works/teleordinal.png",
    title: "TeleOrdinal DAPP",
    tags: ["Next.js", "Monorepo", "EVM", "Bitcoin", "TailwindCSS", "i18n"],
    projectLink: "https://teleordinal.xyz/",
  },
  {
    imgSrc: "/images/zeema-2.png",
    title: " Zeema (Crowdfunding)",
    tags: ["Next.js", "MUI", "Emotion", "Zustand", "PWA"],
    projectLink: "https://zeema.fund/",
  },
  {
    imgSrc: "/images/works/dataak.png",
    title: "Dataak (Social Listening)",
    tags: ["Next.js", "MUI", "i18n"],
    projectLink: "https://dataak.com/",
  },
  // {
  //   imgSrc: "/images/works/moodic.png",
  //   title: "Moodic (Music Player)",
  //   tags: ["Next.js", "TailwindCSS", "i18n", "Monorepo"],
  //   projectLink: "https://mymoodic.com",
  // },
  {
    imgSrc: "/images/works/flatlay.jpeg",
    title: "Flatlay",
    tags: ["Angular", "MUI"],
    projectLink: "https://flatlay.io/",
  },
  // {
  //   imgSrc: "/images/works/frog.jpeg",
  //   title: "Frog",
  //   tags: ["Next.js", "TailwindCSS", "i18n", "Monorepo"],
  //   projectLink: "https://app.frogsylvania.com/",
  // },
];

const Work = () => {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Portfolio Highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
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
