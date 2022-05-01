import styles from "@/styles/Home.module.scss";
import SeeProductBtn from "../common/SeeProductBtn";

const Zx7SpeakerSection = () => {
  return (
    <section>
      <div className={styles.zx7SpeakerContainer}>
        <h1>zx7 speaker</h1>
        <SeeProductBtn link="/speakers/zx7-speaker" color="transparent" />
      </div>
    </section>
  );
};
export default Zx7SpeakerSection;
