import styles from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <section>
      <h2 className={styles.errorHeading}>Page not found</h2>
      <p>The resource you are trying to access does not exist.</p>
    </section>
  );
}
