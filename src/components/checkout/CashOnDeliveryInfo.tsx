import Image from "next/image";
import styles from "@/styles/Checkout.module.scss";

const CashOnDeliveryInfo = () => {
  return (
    <div className={styles.cashOnDeliveryInfo}>
      <Image src="/cart/cash-on-delivery.svg" width={48} height={48} alt="" />
      <p>
        The ‘Cash on Delivery’ option enables you to pay in cash when our
        delivery courier arrives at your residence. Just make sure your address
        is correct so that your order will not be cancelled.
      </p>
    </div>
  );
};

export default CashOnDeliveryInfo;
