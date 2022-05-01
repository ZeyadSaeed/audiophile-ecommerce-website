import { FormInputProps } from "@/types/FormProps";
import { FormContext } from "contexts/formContext";
import { FC, useContext } from "react";

const FormInput: FC<FormInputProps> = ({
  name,
  label,
  type,
  placeholder,
  value,
}) => {
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

  const isNameError = name === "name" && nameError;
  const isEmailError = name === "email" && emailError;
  const isPhoneNumberError = name === "phoneNumber" && phoneNumberError;
  const isAddressError = name === "address" && addressError;
  const isZipCodeError = name === "zipCode" && zipCodeError;
  const isCityError = name === "city" && cityError;
  const isCountryError = name === "country" && countryError;
  const isEMoneyNumberError = name === "eMoneyNumber" && eMoneyNumberError;
  const isEMoneyPINError = name === "eMoneyPIN" && eMoneyPINError;

  const isError =
    isNameError ||
    isEmailError ||
    isPhoneNumberError ||
    isAddressError ||
    isZipCodeError ||
    isCityError ||
    isCountryError ||
    isEMoneyNumberError ||
    isEMoneyPINError;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (name) {
      case "name":
        setFormInfo({ ...formInfo, name: e.target.value });
        break;
      case "email":
        setFormInfo({ ...formInfo, email: e.target.value });
        break;
      case "phoneNumber":
        setFormInfo({ ...formInfo, phoneNumber: e.target.value });
        break;
      case "address":
        setFormInfo({ ...formInfo, address: e.target.value });
        break;
      case "zipCode":
        setFormInfo({ ...formInfo, zipCode: e.target.value });
        break;
      case "city":
        setFormInfo({ ...formInfo, city: e.target.value });
        break;
      case "country":
        setFormInfo({ ...formInfo, country: e.target.value });
        break;
      case "eMoneyNumber":
        setFormInfo({ ...formInfo, eMoneyNumber: e.target.value });
        break;
      case "eMoneyPIN":
        setFormInfo({ ...formInfo, eMoneyPIN: e.target.value });
        break;
    }
  };
  return (
    <label>
      {label}
      <br />
      <input
        style={{
          border: isError ? "2px solid #CD2C2C" : "",
        }}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </label>
  );
};

FormInput.defaultProps = {
  type: "text",
};

export default FormInput;
