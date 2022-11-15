import Head from "next/head";
import Product from "@/components/common/product";
import { ProductType } from "@/types/product";

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
  const res = await fetch(
    `${process.env.VERCEL_URL}/api/speakers/${params.id}`
  );
  const speaker = await res.json();

  return {
    props: {
      speaker,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.VERCEL_URL}/api/speakers`);
  const speakers = await res.json();

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
