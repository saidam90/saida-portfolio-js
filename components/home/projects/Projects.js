import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

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
      "This project showcases the work and capabilities of Devit Studio, a web development agency specializing in websites. ",
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
    title: "Farm ERP",
    imgSrc: "project-imgs/farm-erp.gif",
    code: "#",
    projectLink: "https://farmerp.netlify.app/login",
    tech: [
      "React",
      "Vite.js",
      "Redux",
      "Formik & Yup",
      "Toastify",
      "Material UI",
      "Tailwind CSS",
      "React Leaflet",
      "Turf.JS",
      "Fetch API",
    ],
    description:
      "The application aims to provide farm owners and farmers with tools to manage and monitor their agricultural lands effectively.",
    modalContent: (
      <>
        <p>
          The application aims to provide farm owners and farmers with tools to
          manage and monitor their agricultural lands effectively. Key features
          include managing crop areas represented by polygons on a map, CRUD
          operations, and ensuring a responsive user interface for both mobile
          and web platforms. The goal of this task is to enhance the efficiency
          of agricultural enterprises and optimize their operations.
        </p>
        <p>
          The team consisted of 6 developers. The app was built in three weeks.
        </p>
      </>
    ),
  },
  {
    title: "Re:readr",
    imgSrc: "project-imgs/rereadr.gif",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
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
