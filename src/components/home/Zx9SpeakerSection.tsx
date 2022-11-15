/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Home.module.scss";
import Button from "../common/Button";

const Zx9SpeakerSection = () => {
  return (
    <section className={styles.zx9SpeakerSection}>
      <div className={styles.zx9SpeakerContainer}>
        <picture>
          <source
            media="(min-width: 1440px)"
            width={400}
            srcSet="/home/desktop/image-speaker-zx9.png"
          />
          <source
            media="(min-width: 768px)"
            width={192}
            srcSet="/home/tablet/image-speaker-zx9.png"
          />
          <img
            src="/home/mobile/image-speaker-zx9.png"
            width={167}
            alt="zx9 speaker"
          />
        </picture>

        <div>
          <h1>
            zx9
            <br />
            speaker
          </h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button
            title="SEE PRODUCT"
            link="/speakers/zx9-speaker"
            color="black"
          />
        </div>
      </div>
    </section>
  );
};
export default Zx9SpeakerSection;
