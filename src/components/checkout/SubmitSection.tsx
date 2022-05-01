import { CartType, ProductType } from "@/types/product";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { SpinnerCircularFixed } from "spinners-react";
import styles from "@/styles/Checkout.module.scss";
import { checkoutValidation } from "../../validators/checkoutValidator";
import { CheckoutInfoInterface } from "@/types/checkoutTypes";
import { FormContext } from "./../../contexts/formContext";

const SubmitSection = () => {
  const [cartProducts, setCartProducts] = useState<CartType>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const {
    formInfo,
    nameError,
    setNameError,
    emailError,
    setEmailError,
    phoneNumberError,
    setPhoneNumberError,
    addressError,
    setAddressError,
    zipCodeError,
    setZipCodeError,
    cityError,
    setCityError,
    countryError,
    setCountryError,
    eMoneyNumberError,
    setEMoneyNumberError,
    eMoneyPINError,
    setEMoneyPINError,
  } = useContext(FormContext);

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

  const handleFormSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const checkoutInfo = {
      name: formInfo.name,
      email: formInfo.email,
      phoneNumber: formInfo.phoneNumber,
      address: formInfo.address,
      zipCode: formInfo.zipCode,
      city: formInfo.city,
      country: formInfo.country,
      eMoneyNumber: formInfo.eMoneyNumber,
      eMoneyPIN: formInfo.eMoneyPIN,
    };

    const { error } = checkoutValidation(checkoutInfo);

    console.log(error?.message);
  };
  return (
    <div className={styles.summary}>
      <h1>SUMMARY</h1>

      {isLoading ? (
        <div className={styles.loadingSpinner}>
          <SpinnerCircularFixed
            size={30}
            color="#D87D4A"
            secondaryColor="none"
          />
        </div>
      ) : (
        <>
          <ul>
            {cartProducts.map(({ _id, product, quantity }) => (
              <li key={_id}>
                <div>
                  <Image
                    src={product.cartImage}
                    width={64}
                    height={64}
                    alt={product.name}
                  />
                  <b>
                    {product.cartName}
                    <br />
                    <span>$ {product.price.toLocaleString()}</span>
                  </b>
                </div>

                <span className={styles.quantity}>x{quantity}</span>
              </li>
            ))}
          </ul>

          <div className={styles.pricesContainer}>
            <div>
              <p>TOTAL</p> <b>$ {totalPrice}</b>
            </div>
            <div>
              <p>SHIPPING</p> <b>$ 50</b>
            </div>
            <div>
              <p>VAT (INCLUDED)</p> <b>$ {Math.round(totalPrice * 0.2)}</b>
            </div>

            <div className={styles.grandTotal}>
              <p>GRAND TOTAL</p> <b>$ {totalPrice + 50}</b>
            </div>

            <button onClick={(e) => handleFormSubmit(e)}>CONTINUE & PAY</button>
          </div>
        </>
      )}
    </div>
  );
};

export default SubmitSection;
