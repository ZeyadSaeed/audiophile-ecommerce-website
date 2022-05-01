import { useState, MouseEvent, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CartType, ProductType } from "@/types/product";
import { SpinnerCircularFixed } from "spinners-react";
import styles from "@/styles/Layout.module.scss";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const Cart = ({
  scroll,
  setIsMenuOpen,
  isCartOpen,
  setIsCartOpen,
}: {
  scroll: boolean;
  setIsMenuOpen: any;
  isCartOpen: boolean;
  setIsCartOpen: any;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<CartType>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const prices = products.map(
      ({ product, quantity }: { product: ProductType; quantity: number }) =>
        product.price * quantity
    );
    const initialPrice = 0;
    const totalPrices = prices.reduce(
      (prev: number, current: number) => prev + current,
      initialPrice
    );

    setTotalPrice(Math.round(totalPrices));
  }, [products]);

  const handleCartClick = async () => {
    setIsLoading(true);
    setIsMenuOpen(false);
    setIsCartOpen((prevState: boolean) => !prevState);

    if (!isCartOpen) {
      const deviceId = localStorage.getItem("device");
      const res = await fetch(`/api/cart/${deviceId}`);
      const products = await res.json();

      setProducts(products.cartProducts);
      setIsLoading(false);
    }
  };

  const handleRemoveAllCartProducts = async () => {
    const deviceId = localStorage.getItem("device");
    await fetch(`/api/cart/${deviceId}`, {
      method: "DELETE",
    });
    setProducts([]);
  };

  const onClick = async (
    e: MouseEvent<HTMLButtonElement>,
    itemsId: string,
    id: string,
    quantity: number
  ) => {
    const { name } = e.currentTarget;
    const deviceId = localStorage.getItem("device");

    if (name === INCREMENT) {
      try {
        await fetch(`/api/cart/${deviceId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId: id,
            type: INCREMENT,
          }),
        });

        const cartProducts = [...products].map((product) => {
          if (product.product._id === id) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        });

        setProducts(cartProducts);
      } catch (err) {
        console.log(err);
      }
    }

    if (name === DECREMENT) {
      try {
        if (quantity === 1) {
          await fetch(`/api/cart/product/${deviceId}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: itemsId,
            }),
          });

          const cartProducts = [...products].filter((product) => {
            return product.product._id !== id;
          });
          setProducts(cartProducts);
          return;
        }

        await fetch(`/api/cart/${deviceId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId: id,
            type: DECREMENT,
          }),
        });

        const cartProducts = [...products].map((product) => {
          if (product.product._id === id) {
            return { ...product, quantity: product.quantity - 1 };
          } else {
            return product;
          }
        });

        setProducts(cartProducts);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <button onClick={handleCartClick} className={styles.cart}>
        <Image
          src="/shared/desktop/icon-cart.svg"
          alt="cart"
          width={23}
          height={20}
          priority
        />
      </button>

      {isCartOpen && (
        <>
          <div
            onClick={() => setIsCartOpen(false)}
            className={`${styles.blackScreen} ${
              !scroll && styles.blackScreenFullScreen
            }`}
          />
          <div className={styles.cartOpenContainer}>
            <div>
              {isLoading ? (
                <div className={styles.loadingSpinner}>
                  <SpinnerCircularFixed
                    size={30}
                    color="#D87D4A"
                    secondaryColor="none"
                  />
                </div>
              ) : products.length < 1 ? (
                "Your shopping cart is empty."
              ) : (
                <>
                  <div className={styles.topContainer}>
                    <h2>
                      cart <span>({products.length})</span>
                    </h2>

                    <button
                      onClick={handleRemoveAllCartProducts}
                      className={styles.removeBtn}
                    >
                      Remove all
                    </button>
                  </div>

                  <ul>
                    {products.map(({ _id, product, quantity }) => (
                      <li key={_id}>
                        <div>
                          <Image
                            alt={product.name}
                            src={product.cartImage}
                            width={64}
                            height={64}
                          />

                          <b>
                            {product.cartName}
                            <br />
                            <span>$ {product.price.toLocaleString()}</span>
                          </b>
                        </div>

                        <div className={styles.quantityBtn}>
                          <button
                            disabled={quantity < 1 && true}
                            name={DECREMENT}
                            onClick={(e) =>
                              onClick(e, _id, product._id, quantity)
                            }
                          >
                            -
                          </button>
                          <b>{quantity}</b>
                          <button
                            name={INCREMENT}
                            onClick={(e) =>
                              onClick(e, _id, product._id, quantity)
                            }
                          >
                            +
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.cartTotalPrice}>
                    <p>TOTAL</p>
                    <b>$ {totalPrice.toLocaleString()}</b>
                  </div>

                  <div
                    className={styles.checkoutBtn}
                    onClick={() => setIsCartOpen(false)}
                  >
                    <Link passHref href="/checkout">
                      <a>CHECKOUT</a>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Cart;
