import type { NextPage } from "next";
import Head from "next/head";
import styles from "@/styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <main className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
    </main>
  );
};

export default Home;
