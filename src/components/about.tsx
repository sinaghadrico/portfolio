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
            I&#39;m Sina Ghadri, a frontend engineer and web3 developer with
            over 9 years of experience building dynamic, user-friendly web
            applications. Passionate about creating seamless digital
            experiences, I specialize in React, Next.js,
            TypeScript,Web3,Solidity,EVM,TON, and Node.js to craft scalable and
            responsive designs. I&#39;ve had the opportunity to work with
            companies like TeleportDAO, Wallex,Iran Aseman Airlines, and Mofid,
            contributing to projects that emphasize functionality and design
            excellence. Let&#39;s connect and build something amazing together!
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
