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
              I&apos;m a motivated and detail-oriented graduate from Le Wagon
              bootcamp with a background in full-stack web development. I love
              collaborating with teams and being a team player, but I can also
              handle working on my own and driving projects forward.
              <br />
              With over 5 years of experience in marketing, I&apos;ve got a set
              of transferable skills to bring to the table.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I love to play a piano, watch anime, read books
              and manga.
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
        <Stats />
      </div>
    </section>
  );
};
