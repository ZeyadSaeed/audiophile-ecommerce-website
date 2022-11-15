import styles from "@/styles/Common.module.scss";
import Link from "next/link";

const Button = ({
  title,
  link,
  color,
  customStyles,
}: {
  title: string;
  link: string;
  color: string;
  customStyles?: string;
}) => {
  const onMouseEnter = (e: any) => {
    if (color === "black") {
      e.target.style.backgroundColor = "#4C4C4C";
      return;
    } else if (color === "transparent") {
      e.target.style.backgroundColor = "#000";
      e.target.style.color = "white";
      return;
    }
    e.target.style.backgroundColor = "#FBAF85";
  };

  const onMouseLeave = (e: any) => {
    if (color === "black") {
      e.target.style.backgroundColor = "#000";
      return;
    } else if (color === "transparent") {
      e.target.style.backgroundColor = "transparent";
      e.target.style.color = "black";
      return;
    }
    e.target.style.backgroundColor = "#D87D4A";
  };
  return (
    <Link href={link} passHref>
      <a
        onMouseEnter={(e) => onMouseEnter(e)}
        onMouseLeave={(e) => onMouseLeave(e)}
        style={{
          backgroundColor:
            color === "black"
              ? "black"
              : color === "transparent"
              ? "transparent"
              : "",
          border: color === "transparent" ? "1px solid black" : "",
          color: color === "transparent" ? "black" : "",
          width: customStyles,
        }}
        className={styles.seeProduct}
      >
        {title}
      </a>
    </Link>
  );
};
export default Button;
