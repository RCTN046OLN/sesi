import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello Next.js</h1>
      <Link href="/user">
        <a>go to user page</a>
      </Link>
    </div>
  );
}

export default Home;
