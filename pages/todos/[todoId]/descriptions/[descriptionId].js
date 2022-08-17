import Link from 'next/link';

import { useRouter } from 'next/router';

export default function Description() {
  const router = useRouter();

  const todoId = router.query.todoId;
  const descriptionId = router.query.descriptionId;

  return (
    <>
      <h2>Tarefa: {todoId}</h2>
      <p>Descrição: {descriptionId}</p>
      <Link href={`/todos/${todoId}`}>
        <a>Voltar</a>
      </Link>
    </>
  );
}
