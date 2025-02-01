import styles from "./(resources)/(css)/homepage.module.css";

export default function Home() {
  return (
    <section className={`container ${styles.back}`}>
        <h1 className={styles.title}>Homepage</h1>
    </section>
  );
}
