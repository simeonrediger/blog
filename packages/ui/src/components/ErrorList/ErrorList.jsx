import styles from './ErrorList.module.css';

export default function ErrorList({ errors }) {
  return (
    <ul className={styles.errorList}>
      {errors.map((error, i) => (
        <li key={i}>{error}</li>
      ))}
    </ul>
  );
}
