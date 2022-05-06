import { useContext, useEffect, useState } from "react";
import FormInput from "./FormInput";
import styles from "@/styles/Checkout.module.scss";
import FormRadioInput from "./FormRadioInput";
import CashOnDeliveryInfo from "./CashOnDeliveryInfo";
import { FormContext } from "contexts/formContext";

const FormSection = () => {
  const [isEMoneyChecked, setIsEMoneyChecked] = useState(true);
  const {
    formInfo,
    setFormInfo,
    nameError,
    emailError,
    phoneNumberError,
    addressError,
    zipCodeError,
    cityError,
    countryError,
    eMoneyNumberError,
    eMoneyPINError,
  } = useContext(FormContext);

  useEffect(() => {
    if (isEMoneyChecked) {
      setFormInfo({ ...formInfo, eMoney: true, cashOnDelivery: false });
      return;
    }
    setFormInfo({ ...formInfo, eMoney: false, cashOnDelivery: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEMoneyChecked]);
  return (
    <div className={styles.checkoutForm}>
      <h1>CHECKOUT</h1>
      <h2>BILLING DETAILS</h2>
      <div className={styles.billingDetails}>
        <FormInput
          name="name"
          label="Name"
          handleChange={(value) => setFormInfo({ ...formInfo, name: value })}
          isError={nameError ? true : false}
          placeholder="Alexei Ward"
          value={formInfo.name}
        />
        <FormInput
          name="email"
          label="Email Address"
          handleChange={(value) => setFormInfo({ ...formInfo, email: value })}
          isError={emailError ? true : false}
          placeholder="alexei@mail.com"
          value={formInfo.email}
        />
        <FormInput
          name="phoneNumber"
          label="Phone Number"
          handleChange={(value) =>
            setFormInfo({ ...formInfo, phoneNumber: value })
          }
          isError={phoneNumberError ? true : false}
          placeholder="+1 202-555-0136"
          value={formInfo.phoneNumber}
        />
      </div>

      <h2>SHIPPING INFO</h2>
      <div className={styles.shippingInfo}>
        <FormInput
          name="address"
          label="Your Address"
          handleChange={(value) => setFormInfo({ ...formInfo, address: value })}
          isError={addressError ? true : false}
          placeholder="1137 Williams Avenue"
          value={formInfo.address}
        />
        <FormInput
          name="zipCode"
          handleChange={(value) => setFormInfo({ ...formInfo, zipCode: value })}
          isError={zipCodeError ? true : false}
          label="ZIP Code"
          placeholder="10001"
          value={formInfo.zipCode}
        />
        <FormInput
          name="city"
          handleChange={(value) => setFormInfo({ ...formInfo, city: value })}
          isError={cityError ? true : false}
          label="City"
          placeholder="New York"
          value={formInfo.city}
        />
        <FormInput
          name="country"
          handleChange={(value) => setFormInfo({ ...formInfo, country: value })}
          isError={countryError ? true : false}
          label="Country"
          placeholder="United States"
          value={formInfo.country}
        />
      </div>

      <div className={styles.paymentDetails}>
        <h2>PAYMENT DETAILS</h2>
        <div className={styles.radioInput}>
          <label>Payment Method</label>
          <div className={styles.inputRadioContainer}>
            <FormRadioInput
              setIsChecked={setIsEMoneyChecked}
              defaultChecked={true}
              onClickIsChecked={true}
              label="e-Money"
              style={isEMoneyChecked}
            />
            <FormRadioInput
              setIsChecked={setIsEMoneyChecked}
              defaultChecked={false}
              onClickIsChecked={false}
              label="Cash on Delivery"
              style={!isEMoneyChecked}
            />
          </div>
        </div>
        <br />

        {isEMoneyChecked ? (
          <div className={styles.eMoneyContainer}>
            <FormInput
              name="eMoneyNumber"
              label="e-Money Number"
              handleChange={(value) =>
                setFormInfo({ ...formInfo, eMoneyNumber: value })
              }
              type="number"
              isError={eMoneyNumberError ? true : false}
              placeholder="238521993"
              value={formInfo.eMoneyNumber}
            />
            <FormInput
              name="eMoneyPIN"
              handleChange={(value) =>
                setFormInfo({ ...formInfo, eMoneyPIN: value })
              }
              isError={eMoneyPINError ? true : false}
              label="e-Money PIN"
              type="number"
              placeholder="6891"
              value={formInfo.eMoneyPIN}
            />
          </div>
        ) : (
          <CashOnDeliveryInfo />
        )}
      </div>
    </div>
  );
};

export default FormSection;
