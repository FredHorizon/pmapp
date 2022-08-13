import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1>App</h1>
    </div>
  );
}
