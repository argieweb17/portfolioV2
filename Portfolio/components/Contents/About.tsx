import Image from "next/image";
import React from "react";
import CardAbout from "../utils/card-about";
import Header from "../utils/Header";
import { Button } from "../ui/button";
import { FaCode } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import Link from "next/link";
import { Project } from "@/data/Project";
import { Certificates } from "@/data/Certificates";
import { Skill_data } from "@/data/Skills";
import { LuBlocks } from "react-icons/lu";
import { IoDocumentTextSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils";

const About = () => {
  return (
    <section id="about" className="lg:mx-20">
      <Header
        title="About Me"
        description="Transforming ideas into digital experiences"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-5 md:gap-0">
        <motion.div
          whileInView={"visible"}
          initial={"hidden"}
          viewport={{ once: true }}
          variants={slideInFromLeft(0.5)}
          className="order-2 md:order-1"
        >
          <div className="font-bold text-white flex flex-col justify-center items-center text-4xl md:text-5xl  lg:text-6xl ">
            <span className="text-[#2196f3]">Hello, i&apos;am</span>
            <h1 className="text-center">Putu Rivan Anggana</h1>
          </div>
          <p className="text-gray-400 my-5 max-w-[600px] text-justify mx-10 text-md md:text-xl">
            Tech enthusiast who enjoys turning ideas into real projects. I work mostly with TypeScript to build responsive and user-friendly applications.
            Outside of coding, I mentor fellow learners and actively contribute to tech communities. Let&apos;s connect and build something meaningful together!
          </p>
          <div className="flex flex-row gap-5 justify-center">
            <a
              href="https://drive.google.com/uc?export=download&id=11lTqzZGPg-BY9yZvajp6Dcs8XO3lNal4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row gap-2"
            >
              <Button size={"lg"} className="z-20">
                <IoDocumentTextSharp size={24} />
                Download CV
              </Button>
            </a>
            <Link href={"#portfolio"} className="flex flex-row gap-2">
              <Button variant={"outline"} size={"lg"} className="z-20">
                <FaCode size={24} />
                View Project
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.figure
          whileInView={"visible"}
          initial={"hidden"}
          viewport={{ once: true }}
          variants={slideInFromRight(0.5)}
          className="md:order-2 order-1 z-20 items-center justify-center"
        >
          <Image
            src="/Me.png"
            alt="profile"
            width={500}
            height={500}
            className="transition-all duration-300 ease-in-out scale-100 hover:scale-105 rounded-full z-20 w-[250px] md:w-96"
          />
        </motion.figure>
      </div>

      <div className="flex flex-col md:flex-row md:gap-20 gap-5 my-10 items-center justify-center">
        <CardAbout
          title="Total Project"
          total={Project.length}
          description="Innovative web Solutions crafted"
          icons={FaCode}
          delay={0.5}
          linkHref="portfolio"
        />
        <CardAbout
          title="Certificate"
          total={Certificates.length}
          description="Professional skills validated"
          icons={LiaCertificateSolid}
          delay={1}
          linkHref="portfolio"
        />
        <CardAbout
          title="Total Stack"
          total={Skill_data.length}
          description="Continuous learning and growth"
          icons={LuBlocks}
          delay={1.5}
          linkHref="portfolio"
        />
      </div>
    </section>
  );
};

export default About;
