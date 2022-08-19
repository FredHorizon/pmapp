import Link from 'next/link';

// o parâmetro context pode acessar especificidades de cada item
export async function getStaticProps(context) {
  const { params } = context;

  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos${params.todoId}`
  );

  const todo = await data.json();

  return {
    props: { todo },
  };
}

// mapeia os itens disponíveis na rota da API, que no caso é /todos
export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');

  const data = await response.json();

  const paths = data.map((todo) => {
    return {
      params: {
        todoId: `${todo.id}`,
      },
    };
  });

  // fallback: false renderiza somente os arquivos que foram buildados. Não renderiza atualizações posteriores
  return { paths, fallback: false };
}

export default function Todos({ todo }) {
  return (
    <>
      <Link href="/">
        <a>Voltar</a>
      </Link>
      <h1>Tarefa: {todo.id}</h1>
      <h3>Text: {todo.title}</h3>
      {/* Rotas dinâmicas dentro de rotas dinâmicas */}
      <p>
        Descrição: Lorem ipsum dolor, sit amet consectetur adipisicing elit...
        <Link href={`/todos/${todo.id}/descriptions/1`}>
          <a>Continuar lendo</a>
        </Link>
      </p>
      <p>
        Descrição: Lorem ipsum dolor, sit amet...
        <Link href={`/todos/${todo.id}/descriptions/2`}>
          <a>Continuar lendo</a>
        </Link>
      </p>
      <p>
        Descrição: Lorem ipsum dolor, sit amet consectetur...
        <Link href={`/todos/${todo.id}/descriptions/3`}>
          <a>Continuar lendo</a>
        </Link>
      </p>
    </>
  );
}
