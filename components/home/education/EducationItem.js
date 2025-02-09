import { Reveal } from "@/components/utils/Reveal";
import styles from "./education.module.scss";

export const EducationItem = ({
  title,
  position,
  time,
  location,
  description,
}) => {
  return (
    <div className={styles.education}>
      <div className={styles.heading}>
        <Reveal>
          <span className={styles.title}>{title}</span>
        </Reveal>
        <Reveal>
          <span>{time}</span>
        </Reveal>
      </div>

      <div className={styles.heading}>
        <Reveal>
          <span className={styles.position}>{position}</span>
        </Reveal>
        <Reveal>
          <span>{location}</span>
        </Reveal>
      </div>
      <Reveal>
        <div className={styles.description}>
          {description.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </Reveal>
    </div>
  );
};
