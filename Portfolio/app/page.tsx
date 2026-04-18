"use client";

import About from "@/components/Contents/About";
import Contact from "@/components/Contents/Contact";
import Hero from "@/components/Contents/Hero";
import Portofolio from "@/components/Contents/Portofolio";
import Navbar from "@/components/utils/Navbar";
import React from "react";
import { useEffect, useState } from "react";
export default function Home() {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col gap-32 z-20 w-full h-full">
        <Hero />
        <About />
        <Portofolio />
        <Contact />
      </main>
    </>
  );
}
