import styles from "@/styles/Layout.module.scss";

/* eslint-disable @next/next/no-img-element */
const BestGearSection = () => {
  return (
    <section className={styles.bestGears}>
      <picture className="peer">
        <source
          media="(min-width: 1440px)"
          width={540}
          height={588}
          srcSet="/shared/desktop/image-best-gear.jpg"
        />
        <source
          media="(min-width: 768px)"
          width={689}
          height={300}
          srcSet="/shared/tablet/image-best-gear.jpg"
        />
        <img
          className={styles.bestGearsImage}
          width={327}
          height={300}
          src="/shared/mobile/image-best-gear.jpg"
          alt=""
        />
      </picture>
      <div className={styles.bestGearsTextContainer}>
        <h1 className={styles.bestGearsTitle}>
          bringing you the <span>best</span> audio gear
        </h1>

        <p className={styles.besGearsParagraph}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};
export default BestGearSection;
