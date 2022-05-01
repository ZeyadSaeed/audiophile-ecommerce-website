/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Home.module.scss";
import SeeProductBtn from "../common/SeeProductBtn";

const Yx1earphonesSection = () => {
  return (
    <section>
      <div className={styles.yx1earphonesContainer}>
        <div>
          <picture>
            <source
              media="(min-width: 1440px)"
              srcSet="/home/desktop/image-earphones-yx1.jpg"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/home/tablet/image-earphones-yx1.jpg"
            />
            <img src="/home/mobile/image-earphones-yx1.jpg" alt="" />
          </picture>
        </div>
        <div>
          <h1>yx1 earphones</h1>
          <SeeProductBtn link="/earphones/yx1-earphones" color="transparent" />
        </div>
      </div>
    </section>
  );
};
export default Yx1earphonesSection;
