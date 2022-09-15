import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import FibonacciCalculator from "../components/FibonacciCalculator";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>EVE Section4</title>
        <meta
          name="description"
          content="Section 4 in EVE React Evaluation. "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Question 4.1: Fibonacci Sequence Calculator
        </h1>

        <p className={styles.description}>
          This will evaluate your understanding of component props and react
          State hooks.
        </p>

        <div className={styles.grid}>
          <FibonacciCalculator />
        </div>
      </main>
    </div>
  );
};

export default Home;
