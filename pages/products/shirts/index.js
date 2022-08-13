import Link from 'next/link';
import Navbar from '../../../components/Navbar';

export default function Shirts() {
  return (
    <div>
      <Navbar />
      <h1>Camisas</h1>
      <ul>
        <li>
          <Link href="/products/shirts/blueshirt">
            <a>Camisa Azul</a>
          </Link>
        </li>
        <li>
          <Link href="/products/shirts/redshirt">
            <a>Camisa Vermelha</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
