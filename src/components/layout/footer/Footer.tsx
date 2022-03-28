import styles from "@/styles/Layout.module.scss";
import Logo from "../../common/Logo";
import NavLinks from "../../common/NavLinks";
import SocialMediaLinks from "./SocialMediaLinks";
import Paragraph from "./Paragraph";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.topFooter} />
        <div className={styles.footerLogo}>
          <Logo />
        </div>

        <NavLinks
          navClass={styles.footerNavContainer}
          linkClass={styles.footerNavLink}
        />
        <Paragraph />

        <div className={styles.footerBottomContainer}>
          <p>Copyright 2021. All Rights Reserved</p>

          <SocialMediaLinks />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
