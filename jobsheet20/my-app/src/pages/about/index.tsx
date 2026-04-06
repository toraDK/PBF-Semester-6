import styles from "./about.module.scss";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.about__grain}></div>
      <div className={styles.about__card}>
        <p className={styles.about__eyebrow}>Tentang Aplikasi</p>
        <h1 className={styles.about__title} data-testid="title">About Page</h1>
        <p className={styles.about__description}>
          Ini adalah Halaman About.
        </p>
        {/* <div className={styles.about__tags}>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>Praktikum PBF</span>
        </div> */}
      </div>
    </section>
  );
}