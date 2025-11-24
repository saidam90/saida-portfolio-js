import { SectionHeader } from "@/components/utils/SectionHeader";
import { MarketingProject } from "./MarketingProject";
import styles from "./marketingProjects.module.scss";

export const MarketingProjects = () => {
  return (
    <section className="section-wrapper" id="marketingProjects">
      <SectionHeader title="Marketing Projects" dir="l" />

      <div className={styles.projects}>
        {marketingProjects.map((project) => {
          return (
            <MarketingProject
              key={project.title}
              {...project}
            />
          );
        })}
      </div>
    </section>
  );
};

const marketingProjects = [
  {
    title: "Rakoon.fun",
    imgSrc: "project-imgs/rakoon.gif",
    code: "https://github.com/Radix-meme/radix-meme-frontend",
    projectLink: "https://rakoon.fun/",
    tech: ["React", "Typescript", "Redux", "Tailwind CSS"],
    description:
      "The memecoin launchpad on Radix with instant liquidity using a bonding curve.",
    modalContent: (
      <>
        <p>
          Rakoon.fun is a fair memecoin launchpad on the Radix network, inspired
          by pump.fun. It enables users to instantly launch their own memecoins
          with unlimited liquidity using a bonding curve model. Users can either
          create their own memecoin or browse existing coins to buy and sell for
          profit.
        </p>
        <p>The team consists of 4 people, including myself.</p>
      </>
    ),
  },
  {
    title: "Dexter on Radix",
    imgSrc: "project-imgs/dexter.gif",
    code: "https://github.com/DeXter-on-Radix/website",
    projectLink: "https://dexteronradix.com/",
    tech: ["React", "Typescript", "Tailwind CSS"],
    description: "Decentralized order book exchange on Radix.",
    modalContent: (
      <>
        <p>
          DeXter is the very first order book exchange on the Radix network to
          be built entirely by volunteers from the community.
        </p>
        <p>The project is open-sourced.</p>
      </>
    ),
  },
  {
    title: "Devit Studio",
    imgSrc: "project-imgs/devitstudio.gif",
    code: "https://github.com/hesennov/DevIt-studio",
    projectLink: "https://devit-studio.netlify.app/",
    tech: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "SASS",
      "EmailJS",
      "ThreeJS",
      "Framer Motion",
      "Fort Awesome",
    ],
    description:
      "This project showcases the work and capabilities of Devit Studio, a web development agency specializing in websites.",
    modalContent: (
      <>
        <p>
          This project showcases the work and capabilities of Devit Studio, a
          web development agency specializing in websites. This repository is
          for demonstration purposes only and does not represent a real-world
          project. The code and content within this repository are meant to
          showcase the skills and expertise of the team.
        </p>
        <p>The team consisted of 2 people, including myself.</p>
      </>
    ),
  },
];
