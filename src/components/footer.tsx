import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui";
import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/data";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Portfolio",
    href: "#portfolio",
  },
  {
    label: "Experiences",
    href: "#experiences",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2 reveal-up">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
              Let&apos;s work together today!
            </h2>
            <Button
              variant="primary"
              href="mailto:sina.ghadri.dev@gmail.com"
              icon={<ChevronRight className="w-4 h-4 text-zinc-900" />}
            >
              Start project
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <Link
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                      href={href}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2">Socials</p>
              <ul>
                {socialLinks.map(({ alt, href }, key) => (
                  <li key={key}>
                    <Link
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {alt}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <Link href="#home" className="reveal-up">
            <Image
              className="rounded-lg"
              src="/images/logo.png"
              alt="Logo"
              width={40}
              height={40}
            />
          </Link>
          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2024 <span className="text-zinc-200">Sina Ghadri</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
