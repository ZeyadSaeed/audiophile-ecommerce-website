import Link from "next/link";

const NavLinks = ({
  navClass,
  linkClass,
}: {
  navClass: string;
  linkClass: string;
}) => {
  const navLinks = ["/home", "/headphones", "/speakers", "/earphones"];

  return (
    <nav className={navClass}>
      {navLinks.map((link) => (
        <Link href={link === "/home" ? "/" : link} key={link}>
          <a className={linkClass}>{link.slice(1)}</a>
        </Link>
      ))}
    </nav>
  );
};
export default NavLinks;
