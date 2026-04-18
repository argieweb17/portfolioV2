"use client";

import ProjectDetail from "@/components/Contents/project-detail";
import { Project } from "@/data/Project";
import { useParams } from "next/navigation";
import React from "react";

const DetailProject = () => {
  const params = useParams();
  const id = params.id;
  if (!id) {
    return;
  }

  return (
    <>
      {Project.map((data, index) => {
        if (data.id === ~~id) {
          return (
            <main key={index} className="z-50">
              <ProjectDetail
                features={data.feature}
                technologies={data.stack}
                title={data.name}
                description={data.description}
                image={data.img}
                role={data.role}
                github={data.github}
                link={data.link}
              />
            </main>
          );
        }
      })}
    </>
  );
};

export default DetailProject;
