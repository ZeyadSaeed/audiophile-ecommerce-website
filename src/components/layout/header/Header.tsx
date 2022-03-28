// COMPONENTS
import Logo from "../../common/Logo";
import BurgerMenu from "./BurgerMenu";
import NavLinks from "../../common/NavLinks";
import Cart from "./Cart";
// STYLE
import styles from "@/styles/Layout.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <BurgerMenu />
        <Logo />
        <NavLinks
          navClass={styles.headerNavContainer}
          linkClass={styles.headerNavLink}
        />
        <Cart />
      </div>
    </header>
  );
};
export default Header;
