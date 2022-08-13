import Link from 'next/link';
import Navbar from '../../../components/Navbar';

export default function RedShirt() {
  return (
    <div>
      <Navbar />
      <h1>Camisa Vermelha</h1>
      <Link href="/products/shirts">Voltar</Link>
    </div>
  );
}
