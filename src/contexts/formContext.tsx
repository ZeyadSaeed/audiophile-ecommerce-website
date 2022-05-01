import {
  CheckoutInfoInterface,
  CheckoutErrorsInterface,
  CheckoutContextType,
} from "@/types/checkoutTypes";
import { createContext, ReactNode } from "react";
import { useState } from "react";

const FORM_INFO = {
  name: "",
  email: "",
  phoneNumber: "",
  address: "",
  zipCode: "",
  city: "",
  country: "",
  eMoney: true,
  cashOnDelivery: false,
  eMoneyNumber: "",
  eMoneyPIN: "",
};

export const FormContext = createContext<CheckoutContextType>(
  {} as CheckoutContextType
);

export function FormContextWrapper({ children }: { children: ReactNode }) {
  const [formInfo, setFormInfo] = useState<CheckoutInfoInterface>(FORM_INFO);
  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [phoneNumberError, setPhoneNumberError] = useState<string>("");
  const [addressError, setAddressError] = useState<string>("");
  const [zipCodeError, setZipCodeError] = useState<string>("");
  const [cityError, setCityError] = useState<string>("");
  const [countryError, setCountryError] = useState<string>("");
  const [eMoneyNumberError, setEMoneyNumberError] = useState<string>("");
  const [eMoneyPINError, setEMoneyPINError] = useState<string>("");

  return (
    <FormContext.Provider
      value={{
        formInfo,
        setFormInfo,
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
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormContextWrapper;
