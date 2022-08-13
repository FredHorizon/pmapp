import Link from 'next/link';
import Navbar from '../../components/Navbar';
// import '../../styles/globals.css';

export default function Products() {
  return (
    <div>
      <Navbar />
      <h1>Produtos</h1>
      <ul>
        <li>
          <Link href="/products/shirts">
            <a>Camisas</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
