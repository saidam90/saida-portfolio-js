import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Web Dev Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return (
            <Project
              key={project.title}
              {...project}
              inlineStyle={
                project.imgSrc === "project-imgs/rereadr.gif"
                  ? { width: "27%" }
                  : {}
              }
            />
          );
        })}
      </div>
    </section>
  );
};

const projects = [
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
  {
    title: "Cosmed Travel",
    imgSrc: "project-imgs/cosmedtravel.gif",
    code: "https://github.com/saidam90/cosmedtravel",
    projectLink: "https://cosmedtravel-6f2d6c84a8f5.herokuapp.com/",
    tech: [
      "Ruby on Rails",
      "PostgreSQL",
      "Bootstrap",
      "CSS & SASS",
      "JavaScript",
    ],
    description:
      "A medical travel agency that offers customers support in booking aesthetic treatments and services.",
    modalContent: (
      <>
        <p>
          A medical travel agency that offers customers support in booking
          aesthetic treatments and services.
        </p>
        <p>
          Solo-project. At the moment, the project is incomplete due to the lack
          of the information provided by the client.
        </p>
      </>
    ),
  },
  {
    title: "Re:readr",
    imgSrc: "project-imgs/rereadr.gif",
    code: "https://github.com/chantommyy/Re-readr",
    projectLink: "https://re-readr.herokuapp.com/",
    tech: [
      "Ruby on Rails",
      "JavaScript",
      "Stimulus",
      "PostgreSQL",
      "Google Books API",
      "CSS & SASS",
      "Bootstrap",
    ],
    description:
      "With Re:readr, you can swap books you've finished reading for ones you're interested in. Create an account, enter the book's ISBN code, upload it on the website and swap it for a book you like.",
    modalContent: (
      <>
        <p>
          With Re:readr, you can swap books you&apos;ve finished reading for
          ones you&apos;re interested in. Create an account, enter the
          book&apos;s ISBN code, upload it on the website and swap it for a book
          you like. Re:readr is optimized for use on all devices, but for the
          best viewing experience, we recommend using a mobile device.
        </p>
        <p>
          The team in total consisted of 4 developers and the platform was built
          in two weeks. I was involved in both front-end and back-end
          development.
        </p>
      </>
    ),
  },
  {
    title: "Fluffy Friend",
    imgSrc: "project-imgs/fluffyfriend.gif",
    code: "https://github.com/saidam90/fluffy_friend",
    projectLink: "https://fluffy-friend.herokuapp.com/",
    tech: [
      "Ruby on Rails",
      "JavaScript",
      "Stimulus",
      "CSS & SASS",
      "Bootstrap",
    ],
    description:
      "The platform allows you to borrow a pet from someone if you're unable to commit to full-time pet ownership.",
    modalContent: (
      <>
        <p>
          The platform allows you to borrow a pet from someone if you&apos;re
          unable to commit to full-time pet ownership.Our team of 4 people built
          the project in 1 week. I was involved both in front and back-end
          development.
        </p>
      </>
    ),
  },
  {
    title: "Meditation app",
    imgSrc: "project-imgs/meditation.gif",
    code: "https://github.com/saidam90/meditation-app",
    projectLink: "https://saidam90.github.io/meditation-app/",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "The Meditation app allows you to set a timer and desired sound for your meditation session.",
    modalContent: (
      <>
        <p>
          The Meditation app allows you to set a timer and desired sound for
          your meditation session. The app is designed to be minimalist,
          allowing you to focus on your meditation practice without any
          distractions.
        </p>
      </>
    ),
  },
  {
    title: "Previous portfolio website",
    imgSrc: "project-imgs/previous-portfolio.gif",
    code: "https://github.com/saidam90/saida-personal-portfolio",
    projectLink: "https://www.saidamurtazali.com/",
    tech: ["JavaScript", "HTML5", "CSS3"],
    description:
      "My previous portfolio website where I showcased my work, skills, and experiences. The website is designed to be responsive and accessible on various devices.",
    modalContent: (
      <>
        <p>
          My previous portfolio website where I showcased my work, skills, and
          experiences. The website is built using HTML, CSS, and JavaScript and
          is designed to be responsive and accessible on various devices.
        </p>
      </>
    ),
  },
];
