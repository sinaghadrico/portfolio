import { ExperienceCard } from "@/components";

const experienceItem = [
  {
    imgSrc: "/images/company/teleportdao.png",
    label: "Senior Front-End Engineer | Web3 Developer",
    company: "Teleport DAO",
    link: "https://teleportdao.xyz/",
    date: "JUN 2022 - PRESENT",
    location: "DUBAI, UAE",
    desc: "Language",
  },
  // {
  //   imgSrc: "/images/company/mofid.jpeg",
  //   label: "Blockchain Developer - Web3 Developer",
  //   company: "Mofid Securities",
  //   link: "https://www.emofid.com/",
  //   date: "Apr 2023 - Mar 2024",
  //   location: "Tehran, Iran",
  //   desc: "Language",
  // },

  // {
  //   imgSrc: "/images/company/spark.jfif",
  //   label: "Senior Front-End Engineer | Web3 Developer",
  //   company: "SparkWorld* (TotemFi)",
  //   link: "https://www.sparkworld.io/",
  //   date: "JUN 2021 - MAY 2022",
  //   location: "London UK ( Remote )",
  //   desc: "Language",
  // },
  {
    imgSrc: "/images/company/dataak.jfif",
    label: "Senior Front-End Developer",
    company: "Dataak",
    link: "https://dataak.com/",
    date: "JUL 2019 - JUN 2022",
    location: "Tehran, Iran",
    desc: "Language",
  },
  {
    imgSrc: "/images/company/flatlay.jfif",
    label: "Senior Front-End Developer",
    company: "Flatlay",
    link: "https://flatlay.io/",
    date: "FEB 2018 - JUL 2019",
    location: "Berlin, Germany ( Remote )",
    desc: "Language",
  },
  {
    imgSrc: "/images/company/aseman.jfif",
    label: "Front-End Developer",
    company: "Iran Aseman Airlines",
    link: "http://www.iaa.ir/",
    date: "SEP 2015 - FEB 2018",
    location: "Tehran, Iran",
    desc: "Language",
  },
  // {
  //   imgSrc: "/images/company/ania.png",
  //   label: "Front-End Developer",
  //   company: "Ania",
  //   link: "https://anyaco.net/",
  //   date: "OCT 2015 - SEP 2016",
  //   location: "Tehran, Iran",
  //   desc: "Language",
  // },
];

const Experience = () => {
  return (
    <section id="experiences" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Experience</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-1">
          {experienceItem.map(
            ({ imgSrc, desc, label, company, link, date, location }, key) => (
              <ExperienceCard
                className="reveal-up"
                key={key}
                imgSrc={imgSrc}
                desc={desc}
                label={label}
                company={company}
                link={link}
                date={date}
                location={location}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
