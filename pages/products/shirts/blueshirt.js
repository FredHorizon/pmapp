import Link from 'next/link';
import Navbar from '../../../components/Navbar';

export default function BlueShirt() {
  return (
    <div>
      <Navbar />
      <h1>Camisa Azul</h1>
      <Link href="/products/shirts">Voltar</Link>
    </div>
  );
}
