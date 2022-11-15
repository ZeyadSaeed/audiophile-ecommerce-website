import Head from "next/head";
import Product from "@/components/common/product";
import { ProductType } from "@/types/product";
import dbConnect from "util/dbConnect";
import ProductModel from "../../models/ProductsModel";

const headphone = ({ headphones }: { headphones: ProductType }) => {
  return (
    <>
      <Head>
        <title>{headphone.name}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Product product={headphones} />
    </>
  );
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  await dbConnect();
  if (!params) return { props: {} };

  const headphones = await ProductModel.findOne({
    slug: params.id,
    category: "headphones",
  });

  return {
    props: {
      headphones: JSON.parse(JSON.stringify(headphones)),
    },
  };
};

export const getStaticPaths = async () => {
  await dbConnect();
  const headphones = await ProductModel.find({ category: "headphones" });

  const ids = headphones.map((headphone: ProductType) => headphone.slug);
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
export default headphone;
