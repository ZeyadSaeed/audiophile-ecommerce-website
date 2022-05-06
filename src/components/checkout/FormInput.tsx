import { FormInputProps } from "@/types/FormProps";
import { FormContext } from "contexts/formContext";
import { FC, useContext } from "react";
import styles from "@/styles/Checkout.module.scss";

const FormInput: FC<FormInputProps> = ({
  name,
  label,
  type,
  handleChange,
  isError,
  placeholder,
  value,
}) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e.target.value);
  };
  return (
    <label style={{ color: isError ? "#CD2C2C" : "" }}>
      {isError && <text className={styles.error}>Wrong Format</text>}
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
