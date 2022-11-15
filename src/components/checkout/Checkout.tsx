import { useContext, useEffect, useState } from "react";
import { FormContext } from "../../contexts/formContext";
import FormSection from "./FormSection";
import SubmitSection from "./SubmitSection";
import GoBackBtn from "@/components/common/product/productInfo/GoBackBtn";
import styles from "@/styles/Checkout.module.scss";
import OrderSubmitted from "./OrderSubmitted";
import { CartType, ProductType } from "@/types/product";

const Checkout = () => {
  const [cartProducts, setCartProducts] = useState<CartType>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const { isFormSubmitted } = useContext(FormContext);

  useEffect(() => {
    setIsLoading(true);

    const run = async () => {
      try {
        const deviceId = localStorage.getItem("device");
        const res = await fetch(`/api/cart/${deviceId}`);
        const { cartProducts } = await res.json();

        const prices = cartProducts.map(
          ({ product, quantity }: { product: ProductType; quantity: number }) =>
            product.price * quantity
        );
        const initialPrice = 0;
        const totalPrices = prices.reduce(
          (prev: number, current: number) => prev + current,
          initialPrice
        );
        setTotalPrice(Math.round(totalPrices));
        setCartProducts(cartProducts);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    run();
  }, []);
  return (
    <main className={styles.main}>
      <section className={styles.formContainer}>
        <GoBackBtn />

        <form>
          <FormSection />
          <SubmitSection
            cartProducts={cartProducts}
            isLoading={isLoading}
            totalPrice={totalPrice}
          />
        </form>
        {isFormSubmitted && (
          <OrderSubmitted
            cartProducts={cartProducts}
            isLoading={isLoading}
            totalPrice={totalPrice}
          />
        )}
      </section>
    </main>
  );
};

export default Checkout;
