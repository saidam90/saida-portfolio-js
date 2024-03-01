import { Reveal } from "@/components/utils/Reveal";
import styles from "./other.module.scss";
import Link from "next/link";
import { AiOutlineExport } from "react-icons/ai";

export const OtherItem = ({ title, organization, time, description, link }) => {
  return (
    <div className={styles.experience}>
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
          <span className={styles.organization}>{organization}</span>
        </Reveal>
      </div>
      <Reveal>
        <p className={styles.description}>{description}</p>
      </Reveal>
      <Link target="_blank" rel="nofollow" href={link}>
        <AiOutlineExport /> link to the project
      </Link>
    </div>
  );
};
