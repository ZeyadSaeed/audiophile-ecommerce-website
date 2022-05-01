/* eslint-disable @next/next/no-img-element */
import { ImagesType } from "@/types/product";
import styles from "@/styles/Product.module.scss";

interface GalleryProps {
  gallery: {
    first: ImagesType;
    second: ImagesType;
    third: ImagesType;
  };
  name: string;
}
const Gallery = ({ gallery, name }: GalleryProps) => {
  return (
    <section className={styles.gallery}>
      <div>
        <picture>
          <source media="(min-width: 1440px)" srcSet={gallery.first.desktop} />
          <source media="(min-width: 768px)" srcSet={gallery.first.tablet} />
          <img src={gallery.first.mobile} alt={name} />
        </picture>

        <picture>
          <source media="(min-width: 1440px)" srcSet={gallery.second.desktop} />
          <source media="(min-width: 768px)" srcSet={gallery.second.tablet} />
          <img src={gallery.second.mobile} alt={name} />
        </picture>
      </div>

      <picture>
        <source media="(min-width: 1440px)" srcSet={gallery.third.desktop} />
        <source media="(min-width: 768px)" srcSet={gallery.third.tablet} />
        <img
          src={gallery.third.mobile}
          alt={name}
          className={styles.lastImage}
        />
      </picture>
    </section>
  );
};
export default Gallery;
