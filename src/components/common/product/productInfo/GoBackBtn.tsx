import Link from "next/link";
import styles from "@/styles/Product.module.scss";
import { useRouter } from "next/router";

const GoBackBtn = () => {
  const { back } = useRouter();
  const goBack = () => {
    back();
  };
  return (
    <button onClick={goBack} className={styles.goBackBtn}>
      Go Back
    </button>
  );
};
export default GoBackBtn;
