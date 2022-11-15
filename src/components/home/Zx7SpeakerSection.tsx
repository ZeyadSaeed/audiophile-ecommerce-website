import styles from "@/styles/Home.module.scss";
import Button from "../common/Button";

const Zx7SpeakerSection = () => {
  return (
    <section>
      <div className={styles.zx7SpeakerContainer}>
        <h1>zx7 speaker</h1>
        <Button
          title="SEE PRODUCT"
          link="/speakers/zx7-speaker"
          color="transparent"
        />
      </div>
    </section>
  );
};
export default Zx7SpeakerSection;
