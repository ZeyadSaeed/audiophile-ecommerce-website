import Category from "./Category";
import styles from "@/styles/Common.module.scss";

const Categories = () => {
  return (
    <section>
      <div className={styles.categoriesContainer}>
        <Category
          title="headphones"
          img="/shared/desktop/image-category-thumbnail-headphones.png"
          width={135.92}
          height={142}
        />
        <Category
          title="speakers"
          img="/shared/desktop/image-category-thumbnail-speakers.png"
          width={145.04}
          height={142}
        />
        <Category
          title="earphones"
          img="/shared/desktop/image-category-thumbnail-earphones.png"
          width={160}
          height={142}
        />
      </div>
    </section>
  );
};
export default Categories;
