import Link from 'next/link';

export default function Navbar() {
  return (
    <div>
      <h1>Navbar</h1>
      <ul>
        <li>
          <Link href="/">
            <a>Início</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Sobre</a>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <a>Produtos</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
