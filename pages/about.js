import Image from 'next/image';

import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.main}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
        corporis impedit doloremque vitae, iusto nemo harum laborum voluptatum
        natus amet optio ab inventore repellat eum libero.
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
    </div>
  );
}
