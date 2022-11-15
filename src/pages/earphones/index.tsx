import CategoryHeader from "@/components/common/CategoryHeader";
import Head from "next/head";
import { ProductType } from "@/types/product";
import ProductsList from "@/components/common/ProductsList";
import Categories from "@/components/common/categories/Categories";
import styles from "@/styles/Home.module.scss";
import dbConnect from "util/dbConnect";
import ProductModel from "../../models/ProductsModel";

const earphones = ({ earphones }: { earphones: [ProductType] }) => {
  return (
    <main className={styles.main}>
      <Head>
        <title>Earphones</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <CategoryHeader category="earphones" />
      <ProductsList products={earphones} />
      <Categories />
    </main>
  );
};

export const getStaticProps = async () => {
  await dbConnect();
  const res = await ProductModel.find({ category: "earphones" });
  const result = JSON.parse(JSON.stringify(res));

  const earphones = result.sort((a: any, b: any) => {
    if (a.name > b.name) return -1;
    if (a.name < b.name) return 1;
    return 0;
  });

  return {
    props: {
      earphones,
    },
  };
};

export default earphones;
