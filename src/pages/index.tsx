/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Categories from "@/components/common/categories";
import styles from "@/styles/Home.module.scss";
import HomeHeader from "@/components/home/HomeHeader";
import Zx9SpeakerSection from "@/components/home/Zx9SpeakerSection";
import Zx7SpeakerSection from "@/components/home/Zx7SpeakerSection";
import Yx1earphonesSection from "@/components/home/Yx1earphonesSection";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <HomeHeader />
      <Categories />
      <Zx9SpeakerSection />
      <Zx7SpeakerSection />
      <Yx1earphonesSection />
    </main>
  );
};

export default Home;
