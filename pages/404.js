import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/404.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <Image
        src="https://www.midianews.com.br/storage/webdisco/2018/09/25/438x291/46aa870dc5dbcd2f3a0b0a22d948a46a.jpg"
        width="300px"
        height="300px"
        alt="Not Found"
      />
      <h2>Página não encontrada</h2>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </div>
  );
}
