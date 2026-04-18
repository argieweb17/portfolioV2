import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils";

interface Props {
  TechStackIcon: string;
  Language: string;
  delay: number;
}
const CardStack = ({ TechStackIcon, Language, delay }: Props) => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={slideInFromLeft(delay)}
      className="z-20 group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
    >
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
        <Image
          src={TechStackIcon}
          alt={`${Language} icon`}
          width={64}
          height={64}
          className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
        />
      </div>
      <span className="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
        {Language}
      </span>
    </motion.div>
  );
};

export default CardStack;
