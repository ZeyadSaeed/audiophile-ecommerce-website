import styles from "@/styles/Home.module.scss";
import Button from "../common/Button";
import Header from "../layout/header/Header";

const HomeHeader = () => {
  return (
    <header className={styles.headerContainer}>
      <Header />
      <div className={styles.container}>
        <div></div>

        <div className={styles.text}>
          <span>NEW PRODUCT</span>
          <h1>XX99 MARK II HEADPHONES</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button
            title="SEE PRODUCT"
            link="/headphones/xx99-mark-two-headphones"
            color="brown"
          />
        </div>
      </div>
    </header>
  );
};
export default HomeHeader;
