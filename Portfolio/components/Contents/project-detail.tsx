import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Skill_data } from "@/data/Skills";
import CTA from "../utils/CTA";
import CardStackDetail from "../utils/card-stack-detail";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface Props {
  technologies: number[] | undefined;
  title: string;
  description: string;
  image: string;
  features: string[] | undefined;
  role: string;
  github: string | undefined;
  link: string | undefined
}

const ProjectDetail = ({
  features,
  technologies,
  title,
  description,
  image,
  role,
  github,
  link
}: Props) => {
  // Map technologies ID to Skill_data
  const tech = technologies?.map((data: any) => Skill_data.find((item) => item.id === data)).filter((item: any) => item !== undefined); // Filter to remove undefined

  return (
    <section className="z-50 mx-5">
      <CTA />

      <div className="hidden md:block mx-8">
        <div className="z-50 grid grid-cols-2 gap-5">
          <div className="z-50 flex flex-col gap-5">
            <div className="z-50 flex flex-col gap-5">
              <h1 className="z-50 text-3xl font-bold text-center">{title}</h1>
              <p className="text-justify text-md mx-5">{description}</p>
            </div>
            <div>
              <h1 className="z-50 text-2xl font-bold my-2">Technologies :</h1>
              <div className="z-50 flex flex-wrap gap-5">
                {tech?.map((item: any, index: any) => (
                  <CardStackDetail
                    key={index}
                    TechStackIcon={item?.Image}
                    Language={item?.skill_name}
                  />
                ))}
              </div>
            </div>
            <div className="z-50 flex flex-row gap-5 justify-center">
              {github && <Button size={"lg"}>
                <Link href={github} target="_blank" className="flex gap-3 item-center justify-center">
                  <Image
                    src="/Contact/gitwhite.png"
                    alt="github"
                    width={20}
                    height={20}
                  />
                  <p>Github</p>
                </Link>
              </Button>}
              {link && <Button variant={"outline"} size={"lg"}>
                <Link href={link} target="_blank" className="flex gap-2">
                  <ExternalLink size={24} />
                  <p>Live Demo</p>
                </Link>
              </Button>
              }
            </div>
          </div>

          <div className="flex items-start flex-col justify-start">
            <figure className="z-50">
              <Image
                src={image}
                alt={title}
                width={700}
                height={700}
                className="z-50 rounded-3xl hover:rounded-xl scale-100 hover:scale-105 transition-all duration-300 "
              />
            </figure>
            <div className="my-5 flex flex-col gap-5">
              <h1>
                <span className="font-bold text-xl">Role :</span> {role}
              </h1>
              {features &&
                <ul className="list-disc">
                  <h1 className="text-2xl font-bold"> Feature</h1>
                  {features?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              }

            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="block md:hidden z-50 my-10 mx-2">
        <div className="z-50 flex flex-col gap-5">
          <h1 className="text-3xl font-bold text-center">{title}</h1>
          <figure className="z-50 mx-5">
            <Image
              src={image}
              alt={title}
              width={700}
              height={700}
              className="z-50 rounded-3xl hover:rounded-xl scale-100 hover:scale-105 transition-all duration-300 "
            />
          </figure>
          <p className="text-justify text-sm mx-5">{description}</p>

          {features && <ul className="list-disc mx-5">
            <h1 className="text-2xl font-bold"> Feature</h1>
            {features?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>}


          <h1>
            <span className="font-bold text-xl">Role :</span> {role}
          </h1>

          <div>
            <h1 className="z-50 text-2xl font-bold my-2">Technologies :</h1>
            <div className="z-50 flex flex-wrap gap-5 justify-center">
              {tech?.map((item, index) => (
                <CardStackDetail
                  key={index}
                  TechStackIcon={item?.Image}
                  Language={item?.skill_name}
                />
              ))}
            </div>
          </div>

          <div className="z-50 flex flex-row gap-5 justify-center">
            {github && <Button size={"lg"}>
              <Image
                src="/Contact/gitwhite.png"
                alt="github"
                width={20}
                height={20}
              />
              <p>Github</p>
            </Button>}
            {link && <Button variant={"outline"} size={"lg"}>
              <ExternalLink size={24} />
              <p>Live Demo</p>
            </Button>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
