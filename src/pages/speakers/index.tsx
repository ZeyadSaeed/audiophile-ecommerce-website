import CategoryHeader from "@/components/common/CategoryHeader";
import Head from "next/head";
import ProductsList from "@/components/common/ProductsList";
import Categories from "@/components/common/categories/Categories";
import { ProductType } from "@/types/product";
import styles from "@/styles/Home.module.scss";
import dbConnect from "util/dbConnect";
import ProductModel from "../../models/ProductsModel";

const speakers = ({ speakers }: { speakers: [ProductType] }) => {
  return (
    <main className={styles.main}>
      <Head>
        <title>Speakers</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <CategoryHeader category="speakers" />
      <ProductsList products={speakers} />
      <Categories />
    </main>
  );
};

export const getStaticProps = async () => {
  await dbConnect();
  const res = await ProductModel.find({ category: "speakers" });
  const result = JSON.parse(JSON.stringify(res));

  const speakers = result.sort((a: any, b: any) => {
    if (a.name > b.name) return -1;
    if (a.name < b.name) return 1;
    return 0;
  });

  return {
    props: {
      speakers,
    },
  };
};

export default speakers;
