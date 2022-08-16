import styles from '../styles/Home.module.css';

import Head from 'next/head';
import Image from 'next/image';

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
        <Image
          src="/images/im.jpg"
          width="300px"
          height="300px"
          alt="Iron Maiden"
        />
      </div>
    </>
  );
}
