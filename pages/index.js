import styles from '../styles/Home.module.css';

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Iníco</title>
        <meta name="keywords" content="Camisas, Roupas" />
        <meta name="description" content="As melhores camisas estão aqui" />
      </Head>
      <div>
        <h1 className={styles.title}>App</h1>
      </div>
    </>
  );
}
