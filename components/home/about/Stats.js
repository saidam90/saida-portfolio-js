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
            <span>Marketing Skills</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Digital Marketing</span>
            <span className="chip">Marketing Automation</span>
            <span className="chip">Growth Hacking</span>
            <span className="chip">Google Ads</span>
            <span className="chip">GA 4</span>
            <span className="chip">SEM</span>
            <span className="chip">SEO</span>
            <span className="chip">PPC</span>
            <span className="chip">Mailchimp</span>
            <span className="chip">Pipedrive</span>
            <span className="chip">cPanel</span>
            <span className="chip">Wordpress</span>
            <span className="chip">SEMrush</span>
            <span className="chip">ManyChat</span>
            <span className="chip">Zapier</span>
            <span className="chip">Canva</span>
            <span className="chip">Hootsuite</span>
            <span className="chip">Photoshop</span>
            <span className="chip">Photoshop</span>
          </div>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Tech Stack</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">React</span>
            <span className="chip">Redux</span>
            <span className="chip">Ruby</span>
            <span className="chip">Ruby on Rails</span>
            <span className="chip">Node.js</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">Tailwind CSS</span>
            {/* <span className="chip">Postgresql</span> */}
            {/* <span className="chip">MondoDB</span> */}
            {/* <span className="chip">Bootstrap</span> */}
            <span className="chip">Figma</span>
            {/* <span className="chip">GitHub</span> */}
            {/* <span className="chip">Heroku</span> */}
          </div>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Launguages</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">English</span>
            <span className="chip">Russian</span>
            <span className="chip">Azerbaijani</span>
            <span className="chip">Japanese</span>
            <span className="chip">Turkish</span>
          </div>
        </div>
      </Reveal>
      {/* <Reveal>
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
      </Reveal> */}
    </div>
  );
};
