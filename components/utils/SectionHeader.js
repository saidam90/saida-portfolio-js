import styles from "./header.module.scss";
import { Reveal } from "./Reveal";

export const SectionHeader = ({ title, dir = "r" }) => {
  const headerClass =
    dir === "r"
      ? `${styles.sectionHeader} ${styles.sectionHeaderRow}`
      : `${styles.sectionHeader} ${styles.sectionHeaderReverse}`;

  return (
    <div className={headerClass}>
      <div className={styles.line} />
      <h3>
        <Reveal>
          <span className={styles.title}>
            {title}
            <span>.</span>
          </span>
        </Reveal>
      </h3>
    </div>
  );
};
