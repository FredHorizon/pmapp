import Link from 'next/link';

export async function getStaticProps(context) {
  const { params } = context;
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.todoId}`
  );

  const todo = await data.json();

  return {
    props: { todo },
  };
}

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const data = await response.json();

  // Renderiza as rotas dinâmicas
  const paths = data.map((todo) => {
    return {
      params: {
        todoId: `${todo.id}`,
      },
    };
  });

  return { paths, fallback: false };
}

export default function Todo({ todo }) {
  return (
    <>
      <Link href="/todos">
        <a>Voltar</a>
      </Link>
      <h1>Tarefa: {todo.id}</h1>
      <h3>Text: {todo.title}</h3>
      <p>
        Descrição: Lorem ipsum dolor, sit amet consectetur adipisicing elit...
        <Link href={`/todos/${todo.id}/description/1`}>
          <a>Continuar lendo</a>
        </Link>
      </p>
      <p>
        Descrição: Lorem ipsum dolor, sit amet...
        <Link href={`/todos/${todo.id}/description/2`}>
          <a>Continuar lendo</a>
        </Link>
      </p>
      <p>
        Descrição: Lorem ipsum dolor, sit amet consectetur...
        <Link href={`/todos/${todo.id}/description/3`}>
          <a>Continuar lendo</a>
        </Link>
      </p>
    </>
  );
}
