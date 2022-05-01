/* eslint-disable @next/next/no-img-element */
import { ProductType } from "@/types/product";
import SeeProductBtn from "./SeeProductBtn";
import { useRouter } from "next/router";

const Product = ({ productDetails }: { productDetails: ProductType }) => {
  const { categoryImage, new: isNew, name, description, slug } = productDetails;

  const { pathname } = useRouter();
  const firstName: string =
    pathname === "/speakers" ? name.slice(0, -7) : name.slice(0, -10);
  const secondName: string =
    pathname === "/speakers" ? name.slice(-7) : name.slice(-10);

  return (
    <li>
      <picture>
        <source media="(min-width: 1440px)" srcSet={categoryImage.desktop} />
        <source media="(min-width: 768px)" srcSet={categoryImage.tablet} />
        <img src={categoryImage.mobile} alt={name} />
      </picture>

      <div>
        {isNew && <span>new product</span>}
        <h1>
          {firstName}
          <br />
          {secondName}
        </h1>
        <p>{description}</p>
        <SeeProductBtn color="brown" link={pathname + "/" + slug} />
      </div>
    </li>
  );
};
export default Product;
