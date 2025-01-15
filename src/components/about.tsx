import Image from "next/image";

const aboutItems = [
  {
    label: "Project done",
    number: 20,
  },
  {
    label: "Years of experience",
    number: 9,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            I&#39;m Sina Ghadri, Passionate Front-End Engineer with over 9 years
            of experience in development and product engineering, passionate
            about creating seamless and innovative user experiences. Skilled at
            excelling as both a team player and a leader. Eager to take on new
            challenges and explore innovative solutions. With a strong emphasis
            on problem‑solving, proficient in adapting to various programming
            languages, frameworks, and tools.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ number, label }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-bold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-amber-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <Image
              src="/images/logo.png"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px] rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
