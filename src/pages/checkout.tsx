import Head from "next/head";
import Checkout from "@/components/checkout";

const checkout = () => {
  return (
    <>
      <Head>
        <title>Checkout</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Checkout />
    </>
  );
};

export default checkout;
