import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>App</h1>
      <Link href="/products">Produtos</Link>
    </div>
  );
}
