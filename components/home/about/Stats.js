import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Tech Stack</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">React</span>
            <span className="chip">Ruby</span>
            <span className="chip">Ruby on Rails</span>
            <span className="chip">Node.js</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">Tailwind CSS</span>
            <span className="chip">Postgresql</span>
            <span className="chip">MondoDB</span>
            <span className="chip">Bootstrap</span>
            <span className="chip">Figma</span>
            <span className="chip">GitHub</span>
            <span className="chip">Heroku</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Currently Learning</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">React</span>
            <span className="chip">JavaScript</span>
            <span className="chip">Redux</span>
            <span className="chip">GraphQL</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
