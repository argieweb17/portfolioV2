import React from "react";
import Header from "../utils/Header";
import Image from "next/image";
import Link from "next/link";
import { Socials } from "@/data/Contact";
import { CgMail } from "react-icons/cg";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTops } from "@/utils";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full h-full flex flex-col gap-10 items-center justify-center z-10"
    >
      <Header title="Contact" description="Get in touch with me" />
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        className="card relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-blue-100/10 shadow-2xl transition-all duration-300 hover:shadow-blue-500/10 hover:border border-blue-500  ease-in-out w-96 z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-sky-500/10 opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
        <motion.figure
          variants={slideInFromTops(1)}
          className="px-10 pt-10 z-10"
        >
          <Image
            src="/Me.png"
            alt="contact"
            width={500}
            height={500}
            className="rounded-full transition-all duration-300 ease-in-out shadow-sky-500 scale-100 hover:scale-110 z-50"
          />
        </motion.figure>
        <motion.div
          variants={slideInFromLeft(1)}
          className="card-body items-center text-center gap-5"
        >
          <h2 className="card-title text-white">Let&apos;s Connect</h2>
          <p className="text-white text-center">Check My Social Media</p>
        </motion.div>
        <div className="flex flex-row gap-3 items-center justify-center">
          {Socials.map((social, index) => (
            <Link
              key={social.id}
              href={social.link}
              target="_blank"
              className="z-10 hover:bg-slate-100/10 transition-all duration-300 ease-in-out rounded-full"
            >
              <motion.div variants={slideInFromLeft(index / 2)} key={index}>
                <Image
                  src={social.Logo}
                  alt={social.name}
                  width={30}
                  height={30}
                />
              </motion.div>
            </Link>
          ))}
        </div>
        <motion.div className="card-actions mx-10  items-center justify-center my-5" variants={slideInFromLeft(1)}>
          <Button
            variant={"outline"}
            className=" z-10"
          >
            <Link
              href="mailto:puturivana.d@gmail.com"
              className="flex gap-2 items-center justify-center"
            >
              <p>Mail Me!</p>
              <CgMail size={20} />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
