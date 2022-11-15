import Head from "next/head";
import CategoryHeader from "@/components/common/CategoryHeader";
import Categories from "@/components/common/categories";
import { ProductType } from "@/types/product";
import styles from "@/styles/Headphones.module.scss";
import ProductsList from "@/components/common/ProductsList";

const ENV = process.env.NODE_ENV;
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
  const res = await fetch(
    `${
      ENV === "development" ? process.env.BASE_URL : process.env.VERCEL_URL
    }/api/headphones`
  );
  const result = await res.json();

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
