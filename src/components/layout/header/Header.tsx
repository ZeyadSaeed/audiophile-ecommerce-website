import { useRouter } from "next/router";
// COMPONENTS
import Logo from "../../common/Logo";
import BurgerMenu from "./BurgerMenu";
import NavLinks from "../../common/NavLinks";
import Cart from "./Cart";
// STYLE
import styles from "@/styles/Layout.module.scss";
import { useEffect, useState } from "react";

const Header = () => {
  const [scroll, setScroll] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const { pathname, locale } = useRouter();

  const scrollEventListener = () => {
    const scrollCheck = window.scrollY < 90;
    if (scrollCheck !== scroll) {
      setScroll(scrollCheck);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollEventListener);

    return () => {
      document.removeEventListener("scroll", scrollEventListener);
    };
  });

  return (
    <header
      className={styles.header}
      style={{
        backgroundColor: pathname === "/" ? "transparent" : "",
      }}
    >
      <div
        className={styles.header__container}
        style={{ flexDirection: locale === "en" ? "row" : "row-reverse" }}
      >
        <BurgerMenu
          scroll={scroll}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          setIsCartOpen={setIsCartOpen}
        />
        <Logo />
        <NavLinks
          navClass={styles.headerNavContainer}
          linkClass={styles.headerNavLink}
        />
        <Cart
          scroll={scroll}
          setIsMenuOpen={setIsMenuOpen}
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
        />
      </div>
    </header>
  );
};
export default Header;
