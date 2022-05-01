/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Product.module.scss";
import { ImagesType } from "@/types/product";
import SeeProductBtn from "../../SeeProductBtn";

interface RecommendedProps {
  products: [
    {
      slug: string;
      name: string;
      image: ImagesType;
    }
  ];
}

const RecommendedProducts = ({ products }: RecommendedProps) => {
  return (
    <section className={styles.recommendedProducts}>
      <h1>you may also like</h1>

      <ul>
        {products.map(({ image, slug, name }) => (
          <li key={slug}>
            <div>
              <picture>
                <source media="(min-width: 1440px)" srcSet={image.desktop} />
                <source media="(min-width: 768px)" srcSet={image.tablet} />
                <img src={image.mobile} alt={name} />
              </picture>
            </div>

            <h2>{name}</h2>

            <SeeProductBtn
              color="brown"
              link={`/${
                slug.slice(-10) === "headphones"
                  ? "headphones"
                  : slug.slice(-7) === "speaker"
                  ? "speakers"
                  : slug.slice(-9) === "earphones"
                  ? "earphones"
                  : ""
              }/${slug}`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default RecommendedProducts;
