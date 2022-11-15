import Link from "next/link";
import Image from "next/image";
import Facebook from "../../../public/shared/desktop/icon-facebook.svg";

const SocialMediaLinks = () => {
  const socialLinks = ["facebook", "twitter", "instagram"];
  return (
    <ul>
      {socialLinks.map((link) => (
        <li key={link}>
          <Link href={`https://${link}.com`} passHref target="_blank">
            <Image
              width={24}
              height={24}
              src={`/shared/desktop/icon-${link}.svg`}
              alt={link}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default SocialMediaLinks;
