import styles from "@/styles/Layout.module.scss";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <button className={styles.burgerMenu}>
        <Image
          src="/shared/tablet/icon-hamburger.svg"
          alt="menu"
          width={16}
          height={15}
          priority
        />
      </button>

      <Image
        src="/shared/desktop/logo.svg"
        alt="audiophile logo"
        width={143}
        height={25}
        priority
      />

      <button>
        <Image
          src="/shared/desktop/icon-cart.svg"
          alt="audiophile logo"
          width={23}
          height={20}
          priority
        />
      </button>
    </header>
  );
};
export default Header;
