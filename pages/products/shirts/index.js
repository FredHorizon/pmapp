import Link from 'next/link';

export default function Shirts() {
  return (
    <div>
      <ul></ul>
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
      <li>
        <Link href="/products">
          <a>Produtos</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Iníco</a>
        </Link>
        <h1>Camisas</h1>
      </li>
    </div>
  );
}
