import Link from 'next/link';
// import '../../styles/globals.css';

export default function Products() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Início</a>
          </Link>
        </li>
        <li>
          <Link href="/products/shirts">
            <a>Camisas</a>
          </Link>
        </li>
      </ul>
      <h1>Produtos</h1>
    </div>
  );
}
