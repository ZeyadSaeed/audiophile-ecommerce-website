import { useState, MouseEvent } from "react";
import styles from "@/styles/Product.module.scss";
import { SpinnerCircularFixed } from "spinners-react";

interface HeadInfoProps {
  isNew: boolean;
  name: string;
  description: string;
  price: number;
  category: string;
  id: string;
}

const HeadInfo = ({
  isNew,
  name,
  description,
  price,
  category,
  id,
}: HeadInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const firstName: string =
    category === "speakers" ? name.slice(0, -7) : name.slice(0, -10);
  const secondName: string =
    category === "speakers" ? name.slice(-7) : name.slice(-10);

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;

    if (name === "INCREMENT") {
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const addToCart = async () => {
    setIsLoading(true);
    const deviceId = localStorage.getItem("device");
    await fetch(`/api/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        deviceId,
        quantity,
        productId: id,
      }),
    });
    setIsLoading(false);
  };

  return (
    <div className={styles.headInfo}>
      {isNew && <span>new product</span>}
      <h1>
        {firstName}
        <br />
        {secondName}
      </h1>

      <p>{description}</p>
      <b className={styles.price}>$ {price.toLocaleString()}</b>

      <div className={styles.addCartContainer}>
        <div className={styles.quantityBtn}>
          <button
            disabled={quantity === 1 && true}
            name="DECREMENT"
            onClick={(e) => onClick(e)}
          >
            -
          </button>
          <b>{quantity}</b>
          <button name="INCREMENT" onClick={(e) => onClick(e)}>
            +
          </button>
        </div>

        <button
          disabled={isLoading}
          onClick={addToCart}
          className={styles.addToCartBtn}
        >
          {isLoading ? (
            <SpinnerCircularFixed
              size={30}
              color="#fff"
              secondaryColor="none"
            />
          ) : (
            "add to cart"
          )}
        </button>
      </div>
    </div>
  );
};
export default HeadInfo;
