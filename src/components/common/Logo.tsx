import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Layout.module.scss";

const Logo = () => {
  return (
    <Link href="/" passHref>
      <a className={styles.logo}>
        <Image
          src="/shared/desktop/logo.svg"
          alt="audiophile logo"
          width={143}
          height={25}
          priority
        />
      </a>
    </Link>
  );
};

export default Logo;
