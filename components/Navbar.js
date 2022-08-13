import Link from 'next/link';

import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1>Logo</h1>
      <ul className="">
        <li>
          <Link href="/">
            <a>Início</a>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <a>Produtos</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Sobre</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contato</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
