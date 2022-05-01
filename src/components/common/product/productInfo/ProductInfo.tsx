import { ProductType } from "@/types/product";
import styles from "@/styles/Product.module.scss";
import ProductImage from "./ProductImage";
import HeadInfo from "./HeadInfo";
import Features from "./Features";
import InTheBox from "./InTheBox";
import Gallery from "./Gallery";
import RecommendedProducts from "./RecommendedProducts";
import Categories from "../../categories/Categories";

const ProductInfo = ({ product }: { product: ProductType }) => {
  const {
    _id,
    image,
    new: isNew,
    name,
    description,
    price,
    features,
    includes,
    gallery,
    others,
    category,
  } = product;

  return (
    <section className={styles.productInfoSection}>
      <section>
        <ProductImage image={image} name={name} />
        <HeadInfo
          isNew={isNew}
          name={name}
          description={description}
          price={price}
          category={category}
          id={_id}
        />
      </section>

      <section className={styles.detailsSection}>
        <Features features={features} />
        <InTheBox includes={includes} />
      </section>

      <Gallery gallery={gallery} name={name} />

      <RecommendedProducts products={others} />

      <Categories />
    </section>
  );
};
export default ProductInfo;
