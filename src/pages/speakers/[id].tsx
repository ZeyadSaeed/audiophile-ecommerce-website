import Head from "next/head";
import Product from "@/components/common/product";
import { ProductType } from "@/types/product";
import dbConnect from "util/dbConnect";
import ProductModel from "../../models/ProductsModel";

const speaker = ({ speaker }: { speaker: ProductType }) => {
  return (
    <>
      <Head>
        <title>{speaker.name}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Product product={speaker} />
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

  const speaker = await ProductModel.findOne({
    slug: params.id,
    category: "speakers",
  });

  return {
    props: {
      speaker: JSON.parse(JSON.stringify(speaker)),
    },
  };
};

export const getStaticPaths = async () => {
  await dbConnect();
  const speakers = await ProductModel.find({ category: "speakers" });

  const ids = speakers.map((speaker: ProductType) => speaker.slug);
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

export default speaker;
