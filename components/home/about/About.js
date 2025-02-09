import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Digital Marketer with 7+ years of experience. Front-end developer
              skilled in React, TypeScript, and Tailwind CSS. I thrive on
              contributing to impactful projects and am eager to grow within a
              dynamic team environment. Interested in Web3 and emerging
              technologies.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I love to play a piano, attend hackathons, watch
              anime, read books and manga.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>Let&apos;s connect 🔗</p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
      </div>
      <Stats />
    </section>
  );
};
