import { ProductType } from "@/types/product";
import Product from "@/components/common/product";
import Head from "next/head";

const ENV = process.env.NODE_ENV;
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

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const res = await fetch(`${process.env.BASE_URL}/api/earphones/${params.id}`);
  const earphones = await res.json();

  return {
    props: {
      earphones,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `${
      ENV === "development" ? process.env.BASE_URL : process.env.VERCEL_URL
    }/api/earphones`
  );
  const earphones = await res.json();

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
