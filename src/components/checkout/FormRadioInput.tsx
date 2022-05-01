import styles from "@/styles/Checkout.module.scss";

const FormRadioInput = ({
  setIsChecked,
  defaultChecked,
  onClickIsChecked,
  label,
  style,
}: {
  setIsChecked: any;
  defaultChecked: boolean;
  onClickIsChecked: boolean;
  label: string;
  style: boolean;
}) => {
  return (
    <label
      className={styles.paymentMethodContainer}
      style={{ border: style ? "1px solid #D87D4A" : "" }}
    >
      <input
        type="radio"
        name="paymentMethod"
        value="e-money"
        defaultChecked={defaultChecked}
        onClick={() => setIsChecked(onClickIsChecked)}
      />
      {label}
    </label>
  );
};

export default FormRadioInput;
