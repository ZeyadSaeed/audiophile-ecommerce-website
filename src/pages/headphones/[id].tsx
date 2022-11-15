import Head from "next/head";
import Product from "@/components/common/product";
import { ProductType } from "@/types/product";

const headphone = ({ headphone }: { headphone: ProductType }) => {
  return (
    <>
      <Head>
        <title>{headphone.name}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Product product={headphone} />
    </>
  );
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/headphones/${params.id}`
  );
  const headphone = await res.json();

  return {
    props: {
      headphone,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/headphones`
  );
  const headphones = await res.json();

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
