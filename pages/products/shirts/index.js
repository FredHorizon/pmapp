import Link from 'next/link';

export default function Shirts() {
  return (
    <div>
      <h1>Camisas</h1>
      <div>
        <Link href="/products/shirts/blueshirt">Camisa Azul</Link>
      </div>
      <div>
        <Link href="/products/shirts/redshirt">Camisa Vermelha</Link>
      </div>
      <div>
        <Link href="/products">Produtos</Link>
      </div>
      <Link href="/">Iníco</Link>
    </div>
  );
}
