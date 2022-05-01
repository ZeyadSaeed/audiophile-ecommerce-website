import styles from "@/styles/Product.module.scss";

const Features = ({ features }: { features: string }) => {
  const firstPart = features.split("\n")[0];
  const secondPart = features.split("\n")[2];
  return (
    <div className={styles.features}>
      <h1>features</h1>
      <p>
        {firstPart}
        <br />
        <br />
        {secondPart}
      </p>
    </div>
  );
};
export default Features;
