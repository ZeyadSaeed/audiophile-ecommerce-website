import styles from "@/styles/Product.module.scss";

interface InTheBoxProps {
  includes: [{ quantity: number; item: string }];
}

const InTheBox = ({ includes }: InTheBoxProps) => {
  return (
    <div className={styles.inTheBox}>
      <h1>in the box</h1>
      <ul>
        {includes.map(({ quantity, item }, index) => (
          <li key={index}>
            <b>{quantity}x</b>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default InTheBox;
