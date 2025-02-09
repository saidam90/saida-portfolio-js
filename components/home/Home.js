import React from "react";
import { SideBar } from "../nav/SideBar";
import { Hero } from "./hero/Hero";
import styles from "./home.module.scss";
import { Heading } from "../nav/Heading";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Other } from "./other/Other";
import { Experience } from "./experience/Experience";
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
          <Projects />
          <Other />
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
