import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { FaCode } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import Header from "../utils/Header";
import CardProject from "../utils/card-project";
import CardCertificates from "../utils/card-certificates";
import CardStack from "../utils/card-stack";
import { Project } from "@/data/Project";
import { Skill_data } from "@/data/Skills";
import { Button } from "../ui/button";
import { LucideBlocks } from "lucide-react";
import { Certificates } from "@/data/Certificates";

const Portofolio = () => {
  // State to control the number of items displayed
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [visibleCertificates, setVisibleCertificates] = useState(6);
  const [visibleStack, setVisibleStack] = useState(14);

  // Function to toggle the number of visible items
  const toggleVisibleProjects = () =>
    setVisibleProjects((prev) => (prev === 6 ? Project.length : 6));
  const toggleVisibleCertificates = () =>
    setVisibleCertificates((prev) => (prev === 6 ? Certificates.length : 6));
  const toggleVisibleStack = () =>
    setVisibleStack((prev) => (prev === 14 ? Skill_data.length : 14));

  return (
    <section id="portfolio">
      <Header
        title="Portfolio Showcase"
        description="Explore my journey through projects, certifications, and technical
          expertise. Each section represents a milestone in my continuous
          learning path."
      />
      <Tabs
        defaultValue="Projects"
        className=" flex flex-col items-center z-20"
      >
        <TabsList className="flex flex-col md:flex-row items-center justify-center bg-transparent border-2 border-gray-800 rounded-lg md:p-5 py-2 z-20 ">
          <TabsTrigger value="Projects">
            <div className="flex flex-col items-center md:p-3 py-5">
              <FaCode size={32} />
              <h1>Projects</h1>
            </div>
          </TabsTrigger>
          <TabsTrigger value="Certificates">
            <div className="flex flex-col items-center md:p-3 py-5">
              <LiaCertificateSolid size={32} />
              <h1>Certificates</h1>
            </div>
          </TabsTrigger>
          <TabsTrigger value="Stack">
            <div className="flex flex-col items-center md:p-3 py-5">
              <LucideBlocks size={32} />
              <h1>Tech Stack</h1>
            </div>
          </TabsTrigger>
        </TabsList>
        {/* Projects */}
        <TabsContent value="Projects">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mx-10">
            {Project.slice(0, visibleProjects).map((project, index) => (
              <CardProject
                key={project.id}
                id={project.id}
                Img={project.img}
                Title={project.name}
                Description={project.description}
                ProjectLink={project.link}
                delay={visibleProjects > 6 ? index / 30 : index / 10}
              />
            ))}
          </div>
          {Project.length > 6 && (
            <Button
              variant={"outline"}
              className="mx-10 mt-5 z-20"
              onClick={toggleVisibleProjects}
            >
              {visibleProjects === 6 ? "See More" : "See Less"}
            </Button>
          )}
        </TabsContent>
        {/* Certificates */}
        <TabsContent value="Certificates">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mx-10">
            {Certificates.slice(0, visibleCertificates).map((sertif, index) => (
              <CardCertificates
                key={index}
                ImgSertif={sertif.link}
                delay={visibleCertificates > 6 ? index / 30 : index / 10}
              />
            ))}
          </div>
          {Certificates.length > 6 && (
            <Button
              variant={"outline"}
              className="mx-10 mt-5 z-20"
              onClick={toggleVisibleCertificates}
            >
              {visibleCertificates === 6 ? "See More" : "See Less"}
            </Button>
          )}
        </TabsContent>
        {/* Stack */}
        <TabsContent value="Stack">
          <div className="grid md:grid-cols-7 grid-cols-2 gap-5 mx-10">
            {Skill_data.slice(0, visibleStack).map((skill, index) => (
              <CardStack
                key={index}
                TechStackIcon={skill.Image}
                Language={skill.skill_name}
                delay={visibleStack > 14 ? index / 30 : index / 10}
              />
            ))}
          </div>
          {Skill_data.length > 14 && (
            <Button
              variant={"outline"}
              className="mx-10 mt-5 z-20"
              onClick={toggleVisibleStack}
            >
              {visibleStack === 14 ? "See More" : "See Less"}
            </Button>
          )}
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Portofolio;
