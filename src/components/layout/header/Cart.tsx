import Image from "next/image";
import styles from "@/styles/Layout.module.scss";

const Cart = () => {
  return (
    <button className={styles.cart}>
      <Image
        src="/shared/desktop/icon-cart.svg"
        alt="cart"
        width={23}
        height={20}
        priority
      />
    </button>
  );
};
export default Cart;
