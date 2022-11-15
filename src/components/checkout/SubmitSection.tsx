import Image from "next/image";
import { useContext } from "react";
import { SpinnerCircularFixed } from "spinners-react";
import styles from "@/styles/Checkout.module.scss";
import { checkoutValidation } from "../../validators/checkoutValidator";
import { CheckoutChildrenProps } from "@/types/checkoutTypes";
import { FormContext } from "./../../contexts/formContext";
import errorCheck from "./errorCheck";

const SubmitSection = ({
  cartProducts,
  isLoading,
  totalPrice,
}: CheckoutChildrenProps) => {
  const {
    formInfo,
    setNameError,
    setEmailError,
    setPhoneNumberError,
    setAddressError,
    setZipCodeError,
    setCityError,
    setCountryError,
    setEMoneyNumberError,
    setEMoneyPINError,
    setIsFormSubmitted,
    setLoading,
    loading,
  } = useContext(FormContext);

  const handleFormSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const checkoutInfo = {
      name: formInfo.name,
      email: formInfo.email,
      phoneNumber: formInfo.phoneNumber,
      address: formInfo.address,
      zipCode: formInfo.zipCode,
      city: formInfo.city,
      country: formInfo.country,
      eMoneyNumber: formInfo.cashOnDelivery ? undefined : formInfo.eMoneyNumber,
      eMoneyPIN: formInfo.cashOnDelivery ? undefined : formInfo.eMoneyPIN,
    };

    const orderedProducts = cartProducts.map((product) => {
      return {
        id: product._id,
        productName: product.product.name,
        quantity: product.quantity,
      };
    });

    const { error } = checkoutValidation(checkoutInfo);

    if (error?.message) {
      errorCheck(
        error?.message,
        setNameError,
        setEmailError,
        setPhoneNumberError,
        setAddressError,
        setZipCodeError,
        setCityError,
        setCountryError,
        setEMoneyNumberError,
        setEMoneyPINError
      );
    }

    if (!error) {
      setLoading(true);
      setNameError("");
      setEmailError("");
      setPhoneNumberError("");
      setAddressError("");
      setZipCodeError("");
      setCityError("");
      setCountryError("");
      setEMoneyNumberError("");
      setEMoneyPINError("");
      setIsFormSubmitted(true);

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // ADD ORDERED PRODUCTS TO CHECKOUT FORM
        body: JSON.stringify({
          ...checkoutInfo,
          cashOnDelivery: formInfo.cashOnDelivery,
          eMoney: formInfo.eMoney,
          orderedProducts,
        }),
      });

      await res.json();
      setLoading(false);
    }
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

            <button onClick={(e) => handleFormSubmit(e)} disabled={loading}>
              {!loading ? (
                "CONTINUE & PAY"
              ) : (
                <SpinnerCircularFixed
                  size={24}
                  color="#fff"
                  secondaryColor="none"
                />
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SubmitSection;
