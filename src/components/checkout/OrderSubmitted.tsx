import styles from "@/styles/Checkout.module.scss";
import { FormContext } from "contexts/formContext";
import { useContext, useState } from "react";
import { GoCheck } from "react-icons/go";
import Button from "../common/Button";
import { CheckoutChildrenProps } from "@/types/checkoutTypes";
import Image from "next/image";

const OrderSubmitted = ({
  cartProducts,
  totalPrice,
}: CheckoutChildrenProps) => {
  const { setIsFormSubmitted } = useContext(FormContext);
  const [isOtherItemsOpen, setIsOtherItemsOpen] = useState(false);
  const [productsNumber, setProductsNumber] = useState(1);

  const goBackHome = () => {
    setIsFormSubmitted(false);
  };

  const onOtherItemClick = () => {
    setIsOtherItemsOpen(!isOtherItemsOpen);

    if (isOtherItemsOpen) {
      setProductsNumber(1);
    } else {
      setProductsNumber(cartProducts.length);
    }
  };
  return (
    <>
      <div className={styles.blackscreen}></div>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.circle}>
            <GoCheck size={32} color="white" />
          </div>
          <div className={styles.textContainer}>
            <h1>
              THANK YOU
              <br />
              FOR YOUR ORDER
            </h1>
            <p>You will receive an email confirmation shortly.</p>
          </div>
        </div>

        <div className={styles.productsInfoContainer}>
          <ul className={styles.products}>
            {cartProducts
              .slice(0, productsNumber)
              .map(({ _id, product, quantity }) => (
                <li key={_id}>
                  <div>
                    <Image
                      src={product.cartImage}
                      alt={product.name}
                      width={50}
                      height={50}
                    />

                    <b className={styles.productName}>
                      {product.cartName}
                      <br />
                      <span>$ {product.price.toLocaleString()}</span>
                    </b>
                  </div>

                  <b className={styles.quantity}>x{quantity}</b>
                </li>
              ))}

            {cartProducts.length > 1 && (
              <div className={styles.otherItems} onClick={onOtherItemClick}>
                {isOtherItemsOpen
                  ? "View less"
                  : `and ${cartProducts.length - 1} other item(s)`}
              </div>
            )}
          </ul>

          <div
            className={styles.prices}
            style={{
              justifyContent: isOtherItemsOpen ? "flex-end" : "",
              paddingBottom: isOtherItemsOpen ? "41px" : "",
            }}
          >
            <h2>GRAND TOTAL</h2>
            <b>$ {(totalPrice + 50).toLocaleString()}</b>
          </div>
        </div>

        <div onClick={goBackHome}>
          <Button
            title="BACK TO HOME"
            link="/"
            color="brown"
            customStyles="100%"
          />
        </div>
      </div>
    </>
  );
};

export default OrderSubmitted;
