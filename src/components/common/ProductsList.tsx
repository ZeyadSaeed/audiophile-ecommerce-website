import Product from "@/components/common/ProductCategory";
import { ProductType } from "@/types/product";
import styles from "@/styles/Common.module.scss";

const ProductsList = ({ products }: { products: [ProductType] }) => {
  return (
    <section>
      <ul className={styles.productsContainer}>
        {products.map((headphone: ProductType) => (
          <Product key={headphone._id} productDetails={headphone} />
        ))}
      </ul>
    </section>
  );
};
export default ProductsList;
