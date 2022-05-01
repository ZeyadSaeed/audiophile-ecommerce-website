import styles from "@/styles/Layout.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import MenuOpen from "./MenuOpen";

const BurgerMenu = ({
  scroll,
  isMenuOpen,
  setIsMenuOpen,
  setIsCartOpen,
}: {
  scroll: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: any;
  setIsCartOpen: any;
}) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  useEffect(() => {
    if (isDesktop) {
      setIsMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDesktop]);

  const handleMenuClick = () => {
    setIsCartOpen(false);
    setIsMenuOpen((prev: any) => !prev);
  };
  return (
    <>
      <button className={styles.burgerMenu} onClick={handleMenuClick}>
        <Image
          src="/shared/tablet/icon-hamburger.svg"
          alt="menu"
          width={16}
          height={15}
          priority
        />
      </button>

      {isMenuOpen && (
        <MenuOpen
          setIsMenuOpen={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
          scroll={scroll}
        />
      )}
    </>
  );
};
export default BurgerMenu;
