import styles from '../styles/Footer.module.css';

export default function Footer({ children }) {
  return (
    <footer className={styles.footer}>
      <p>FredHorizon &copy; 2022</p>
      {children}
    </footer>
  );
}
