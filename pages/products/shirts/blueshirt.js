import Link from 'next/link';
import Image from 'next/image';

import styles from '../../../styles/blueshirt.module.css';

export default function BlueShirt() {
  return (
    <div className={styles.bs}>
      <h1>Camisa Azul</h1>
      <div className={styles.img}>
        <Image
          src="/images/sb.jpg"
          width="300px"
          height="300px"
          alt="Iron Maiden"
        />
      </div>
      <Link href="/products/shirts">Voltar</Link>
    </div>
  );
}
