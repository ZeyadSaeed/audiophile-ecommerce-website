/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Common.module.scss";

const category = ({
  title,
  img,
  width,
  height,
}: {
  title: string;
  img: string;
  width: number;
  height: number;
}) => {
  return (
    <div className={styles.categoryContainer}>
      <div>
        <Image src={img} width={width} height={height} alt={title} />
      </div>
      <h1>{title}</h1>
      <Link href={"/" + title} passHref>
        shop{" "}
        <img
          src="/shared/desktop/icon-arrow-right.svg"
          width={7}
          height={10}
          alt="arrow"
        />
      </Link>
    </div>
  );
};
export default category;
