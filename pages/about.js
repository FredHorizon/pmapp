import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div>
      <Navbar />
      <h1>Sobre</h1>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </div>
  );
}
