import Link from 'next/link';

import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <>
      <ul className={styles.navbar}>
        <h1>Logo</h1>
        <li>
          <Link href="/">
            <a>Início</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Sobre</a>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <a>Produtos</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
