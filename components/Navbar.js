import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav>
      <div>
        <Image
          src="/images/pokeball.png"
          width="30"
          height="30"
          alt="pokebola"
        />
      </div>
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
      </ul>
    </nav>
  );
}
