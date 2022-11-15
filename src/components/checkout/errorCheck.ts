import { Dispatch, SetStateAction } from "react";

const errorCheck = (
  error: string,
  setNameError: Dispatch<SetStateAction<string>>,
  setEmailError: Dispatch<SetStateAction<string>>,
  setPhoneNumberError: Dispatch<SetStateAction<string>>,
  setAddressError: Dispatch<SetStateAction<string>>,
  setZipCodeError: Dispatch<SetStateAction<string>>,
  setCityError: Dispatch<SetStateAction<string>>,
  setCountryError: Dispatch<SetStateAction<string>>,
  setEMoneyNumberError: Dispatch<SetStateAction<string>>,
  setEMoneyPINError: Dispatch<SetStateAction<string>>
) => {
  if (error.includes("name")) {
    setNameError(error);
  } else {
    setNameError("");
  }

  if (error.includes("email")) {
    setEmailError(error);
  } else {
    setEmailError("");
  }

  if (error.includes("phoneNumber")) {
    setPhoneNumberError(error);
  } else {
    setPhoneNumberError("");
  }

  if (error.includes("address")) {
    setAddressError(error);
  } else {
    setAddressError("");
  }

  if (error.includes("zipCode")) {
    setZipCodeError(error);
  } else {
    setZipCodeError("");
  }

  if (error.includes("city")) {
    setCityError(error);
  } else {
    setCityError("");
  }

  if (error.includes("country")) {
    setCountryError(error);
  } else {
    setCountryError("");
  }

  if (error.includes("eMoneyNumber")) {
    setEMoneyNumberError(error);
  } else {
    setEMoneyNumberError("");
  }

  if (error.includes("eMoneyPIN")) {
    setEMoneyPINError(error);
  } else {
    setEMoneyPINError("");
  }
};

export default errorCheck;
