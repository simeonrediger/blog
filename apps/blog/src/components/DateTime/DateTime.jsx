import styles from './DateTime.module.css';

export default function DateTime({ value }) {
  return (
    <span className={styles.date}>{new Date(value).toLocaleString()}</span>
  );
}
