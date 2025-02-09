import React from "react";
import { SideBar } from "../nav/SideBar";
import { Hero } from "./hero/Hero";
import styles from "./home.module.scss";
import { Heading } from "../nav/Heading";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Grants } from "./grants/Grants";
import { Experience } from "./experience/Experience";
import { Education } from "./education/Education";
import { Contact } from "./contact/Contact";
import ReactGA from "react-ga4";

export const Home = () => {
  ReactGA.initialize("G-2940GH5W9Y");

  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main>
          <Heading />
          <Hero />
          <About />
          <Experience />
          <Education />
          <Projects />
          <Grants />
          <Contact />
          <div
            style={{
              height: "200px",
              background:
                "linear-gradient(180deg, var(--background), var(--background-dark))",
            }}
          />
        </main>
      </div>
    </>
  );
};
