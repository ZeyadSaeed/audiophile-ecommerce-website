import { ProductType } from "@/types/product";
import Product from "@/components/common/product";
import Head from "next/head";
import dbConnect from "util/dbConnect";
import ProductModel from "../../models/ProductsModel";
import { GetStaticPaths, GetStaticProps } from "next";

const earphone = ({ earphones }: { earphones: ProductType }) => {
  return (
    <>
      <Head>
        <title>{earphones.name}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Product product={earphones} />;
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  await dbConnect();
  if (!params) return { props: {} };

  const earphones = await ProductModel.findOne({
    slug: params.id,
    category: "earphones",
  });

  return {
    props: {
      earphones: JSON.parse(JSON.stringify(earphones)),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  await dbConnect();
  const earphones = await ProductModel.find({ category: "earphones" });

  const ids = earphones.map((earphone: ProductType) => earphone.slug);
  const paths = ids.map((id: string) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
export default earphone;
