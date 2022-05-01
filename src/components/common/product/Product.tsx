import { ProductType } from "@/types/product";
import GoBackBtn from "./productInfo/GoBackBtn";
import ProductInfo from "./productInfo";
import styles from "@/styles/Product.module.scss";

const Product = ({ product }: { product: ProductType }) => {
  return (
    <main className={styles.main}>
      <GoBackBtn />
      <ProductInfo product={product} />
    </main>
  );
};
export default Product;
