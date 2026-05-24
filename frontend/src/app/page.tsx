import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Vyess Vendor Onboarding</h1>
        <p className={styles.description}>
          Enterprise SaaS platform for vendor registration and management.
        </p>

        <div className={styles.grid}>
          <Link href="/onboarding" className={styles.card}>
            <h2>Start Onboarding &rarr;</h2>
            <p>Register your business and upload your documents.</p>
          </Link>

          <Link href="/admin" className={styles.card}>
            <h2>Admin Dashboard &rarr;</h2>
            <p>Review applications and manage vendors.</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
