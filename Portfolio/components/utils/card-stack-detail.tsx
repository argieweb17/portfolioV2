import Image from "next/image";
import React from "react";

interface Props {
  TechStackIcon: string | undefined;
  Language: string | undefined;
}

const CardStackDetail = ({ TechStackIcon, Language }: Props) => {
  return (
    <div className="h-28 w-24 p-4 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
        <Image
          src={TechStackIcon || ""}
          alt={`${Language} icon`}
          width={40}
          height={40}
          className="relative h-7 w-7 md:h-10 md:w-10 transform transition-transform duration-300"
        />
      </div>
      <span className="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
        {Language}
      </span>
    </div>
  );
};

export default CardStackDetail;
