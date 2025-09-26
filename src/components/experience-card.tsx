import Image from "next/image";
import { cx } from "class-variance-authority";
import Link from "next/link";

type Props = {
  imgSrc: string;
  desc: string;
  label: string;
  className?: string;
  company: string;
  link: string;
  date: string;
  location: string;
};

const ExperienceCard = ({
  imgSrc,
  label,
  company,
  link,
  date,
  className,
}: Props) => {
  return (
    <div
      className={cx(
        "flex items-center gap-3 ring-2 ring-inset " +
          "ring-zinc-50/10 rounded-2xl p-5 hover:bg-zinc-800 transition-colors group",
        className
      )}
    >
      <figure
        className="bg-zinc-700/50 rounded-lg overflow-hidden
       w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors"
      >
        <Image src={imgSrc} alt={label} width={32} height={32} loading="lazy" />
      </figure>

      <div className="w-full">
        <h3>{label}</h3>
        <span className="flex w-full justify-between">
          <p className="text-zinc-400 text-sm">
            {company}
            {/* - {location} */}
          </p>
          <p className="text-zinc-400 text-sm">{date}</p>
        </span>
      </div>
      <Link href={link} target="_blank" className="absolute inset-0"></Link>
    </div>
  );
};

export default ExperienceCard;
