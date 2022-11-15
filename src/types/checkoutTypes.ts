import { Dispatch, SetStateAction } from "react";
import { CartType } from "./product";

interface StaticInfo {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
}

export interface CheckoutChildrenProps {
  cartProducts: CartType;
  isLoading: boolean;
  totalPrice: number;
}

export interface CheckoutInfoInterface extends StaticInfo {
  eMoney: boolean;
  cashOnDelivery: boolean;
  eMoneyNumber?: string;
  eMoneyPIN?: string;
  orderedProducts: {
    id: string;
    productName: string;
    quantity: number;
  }[];
}

export interface CheckoutErrorsInterface extends StaticInfo {
  eMoneyNumber: string | undefined;
  eMoneyPIN: string | undefined;
}

export type CheckoutContextType = {
  formInfo: CheckoutInfoInterface;
  setFormInfo: Dispatch<SetStateAction<CheckoutInfoInterface>>;
  nameError: string;
  setNameError: Dispatch<SetStateAction<string>>;
  emailError: string;
  setEmailError: Dispatch<SetStateAction<string>>;
  phoneNumberError: string;
  setPhoneNumberError: Dispatch<SetStateAction<string>>;
  addressError: string;
  setAddressError: Dispatch<SetStateAction<string>>;
  zipCodeError: string;
  setZipCodeError: Dispatch<SetStateAction<string>>;
  cityError: string;
  setCityError: Dispatch<SetStateAction<string>>;
  countryError: string;
  setCountryError: Dispatch<SetStateAction<string>>;
  eMoneyNumberError: string;
  setEMoneyNumberError: Dispatch<SetStateAction<string>>;
  eMoneyPINError: string;
  setEMoneyPINError: Dispatch<SetStateAction<string>>;
  isFormSubmitted: boolean;
  setIsFormSubmitted: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};
