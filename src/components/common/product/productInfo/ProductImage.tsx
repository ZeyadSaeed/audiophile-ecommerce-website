/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Product.module.scss";
import { ImagesType } from "@/types/product";

const Image = ({ image, name }: { image: ImagesType; name: string }) => {
  return (
    <picture>
      <source media="(min-width: 1440px)" srcSet={image.desktop} />
      <source media="(min-width: 768px)" srcSet={image.tablet} />
      <img src={image.mobile} alt={name} className={styles.productImage} />
    </picture>
  );
};
export default Image;
