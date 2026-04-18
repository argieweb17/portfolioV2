import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IconType } from "react-icons";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils";
import Link from "next/link";
interface Props {
  title: string;
  description: string;
  total: number;
  icons: IconType;
  delay: number;
  linkHref: string;
}

const CardAbout = ({
  title,
  description,
  total,
  icons: Icon,
  delay,
  linkHref,
}: Props) => {
  return (
    <motion.div
      whileInView={"visible"}
      initial={"hidden"}
      viewport={{ once: true }}
      variants={slideInFromLeft(delay)}
      whileHover={{ scale: 1.05 }}
      className="z-20"
    >
      <Link
        href={`#${linkHref}`}
        className="w-[350px] z-20 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-row gap-5 justify-between"
      >
        <div className="flex flex-col gap-2">
          <Icon size={32} className="text-slate-400" />
          <h1 className="font-bold text-slate-200 text-2xl">{title}</h1>
          <p className="text-slate-400">{description}</p>
        </div>
        <div className="flex flex-col justify-between items-center">
          <h1 className="font-bold text-white text-2xl">{total}</h1>
          <IoIosArrowRoundForward
            size={24}
            className="-rotate-45 hover:rotate-0 transition-all duration-300 ease-in-out"
          />
        </div>
      </Link>
    </motion.div>
  );
};

export default CardAbout;
