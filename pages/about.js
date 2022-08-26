import Image from 'next/image';

import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.main}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
        corporis possimus nisi minus hic, voluptatum reiciendis! Distinctio
        quod, vel ratione qui alias modi debitis placeat ipsa reiciendis hic
        deserunt aliquam.
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
