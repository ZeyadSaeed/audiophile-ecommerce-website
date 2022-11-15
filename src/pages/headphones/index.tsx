import Head from "next/head";
import CategoryHeader from "@/components/common/CategoryHeader";
import Categories from "@/components/common/categories";
import { ProductType } from "@/types/product";
import styles from "@/styles/Headphones.module.scss";
import ProductsList from "@/components/common/ProductsList";
import dbConnect from "util/dbConnect";
import ProductModel from "../../models/ProductsModel";

const headphones = ({ headphones }: { headphones: [ProductType] }) => {
  return (
    <main className={styles.main}>
      <Head>
        <title>Headphones</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <CategoryHeader category="headphones" />
      <ProductsList products={headphones} />
      <Categories />
    </main>
  );
};

export const getStaticProps = async () => {
  await dbConnect();
  const res = await ProductModel.find({ category: "headphones" });
  const result = JSON.parse(JSON.stringify(res));

  const headphones = result.sort((a: any, b: any) => {
    if (a.name > b.name) return -1;
    if (a.name < b.name) return 1;
    return 0;
  });

  return {
    props: {
      headphones,
    },
  };
};

export default headphones;
