import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contato</title>
        <meta name="keywords" content="Contato" />
        <meta name="description" content="Entre em contato" />
      </Head>
      <div>
        <h1>Entre em contato conosco.</h1>
        <p>Nome:</p>
        <p>Email:</p>
        <p>Mensagem:</p>
        <h2>Ou por meio do whatsapp</h2>
        <p>99 98888-7777</p>
      </div>
    </>
  );
}
