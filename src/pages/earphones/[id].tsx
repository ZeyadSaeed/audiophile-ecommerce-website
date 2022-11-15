import { ProductType } from "@/types/product";
import Product from "@/components/common/product";
import Head from "next/head";

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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/earphones/${params.id}`
  );
  const earphones = await res.json();

  return {
    props: {
      earphones,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/earphones`
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
