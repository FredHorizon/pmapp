import Link from 'next/link';
// import '../../styles/globals.css';

export default function Products() {
  return (
    <div>
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
