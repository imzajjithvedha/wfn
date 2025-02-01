import styles from "./(public)/(css)/homepage.module.css";

export default function Home() {
  return (
    <section className={`container ${styles.back}`}>
        <h1 className={styles.title}>Homepage</h1>
    </section>
  );
}
