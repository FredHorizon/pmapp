import Link from 'next/link';

import { useRouter } from 'next/router';

export default function Todos() {
  // Cria rotas dinâmicas
  const router = useRouter();

  const todoId = router.query.todoId;

  return (
    <>
      <Link href="/">
        <a>Voltar</a>
      </Link>
      <h1>Tarefa: {todoId}</h1>
      {/* Rotas dinâmicas dentro de rotas dinâmicas */}
      <p>
        Descrição: Lorem ipsum dolor, sit amet consectetur adipisicing elit...
        <Link href={`/todos/${todoId}/descriptions/1`}>
          <a>Continuar lendo</a>
        </Link>
      </p>
      <p>
        Descrição: Lorem ipsum dolor, sit amet...
        <Link href={`/todos/${todoId}/descriptions/2`}>
          <a>Continuar lendo</a>
        </Link>
      </p>
      <p>
        Descrição: Lorem ipsum dolor, sit amet consectetur...
        <Link href={`/todos/${todoId}/descriptions/3`}>
          <a>Continuar lendo</a>
        </Link>
      </p>
    </>
  );
}
