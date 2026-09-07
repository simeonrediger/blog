import styles from './ErrorPage.module.css';

export default function ErrorPage({ error }) {
  return (
    <section>
      <h2 className={styles.errorHeading}>Error</h2>
      <p>{error?.message || 'An unknown error occurred.'}</p>
    </section>
  );
}
