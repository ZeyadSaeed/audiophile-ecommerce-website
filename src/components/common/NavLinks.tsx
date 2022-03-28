import Link from "next/link";
import styles from "@/styles/Layout.module.scss";

const NavLinks = ({
  navClass,
  linkClass,
}: {
  navClass: string;
  linkClass: string;
}) => {
  const navLinks = ["home", "headphones", "speakers", "earphones"];

  return (
    <nav className={navClass}>
      {navLinks.map((link) => (
        <Link href={link === "home" ? "/" : link} key={link}>
          <a className={linkClass}>{link}</a>
        </Link>
      ))}
    </nav>
  );
};
export default NavLinks;
