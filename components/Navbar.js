import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/images/pokeball.png"
          width="30"
          height="30"
          alt="pokebola"
        />
        <h2>PokeNext</h2>
      </div>
      <ul className={styles.link_items}>
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
      </ul>
    </nav>
  );
}
