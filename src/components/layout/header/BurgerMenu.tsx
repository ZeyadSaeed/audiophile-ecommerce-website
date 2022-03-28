import styles from "@/styles/Layout.module.scss";
import Image from "next/image";

const BurgerMenu = () => {
  return (
    <button className={styles.burgerMenu}>
      <Image
        src="/shared/tablet/icon-hamburger.svg"
        alt="menu"
        width={16}
        height={15}
        priority
      />
    </button>
  );
};
export default BurgerMenu;
