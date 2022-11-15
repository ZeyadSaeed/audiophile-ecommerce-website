import Link from "next/link";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";

const NavLinks = ({
  navClass,
  linkClass,
}: {
  navClass: string;
  linkClass: string;
}) => {
  const navLinks = ["/home", "/headphones", "/speakers", "/earphones"];
  const { locale } = useRouter();
  const t = locale === "en" ? en : ar;

  function arabicNav(link: string) {
    if (link === "/home") {
      return t.home;
    }

    if (link === "/headphones") {
      return t.headphones;
    }

    if (link === "/speakers") {
      return t.speakers;
    }

    if (link === "/earphones") {
      return t.earphones;
    }
  }

  return (
    <nav
      className={navClass}
      style={{ flexDirection: locale === "en" ? "row" : "row-reverse" }}
    >
      {navLinks.map((link) => (
        <Link href={link === "/home" ? "/" : link} key={link}>
          <a className={linkClass}>
            {locale === "en" ? link.slice(1) : arabicNav(link)}
          </a>
        </Link>
      ))}
    </nav>
  );
};
export default NavLinks;
