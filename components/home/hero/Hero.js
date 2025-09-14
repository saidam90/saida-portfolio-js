import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Hey, I&apos;m Saida<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            <span>Product & Growth Marketer | Front-end Developer </span>
          </h2>
          {/* <p className={styles.subTitle}>
            <span>Front-end Developer</span>
          </p> */}
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            Let&apos;s connect and drive growth together!✨
          </p>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Get in touch
          </StandardButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};
