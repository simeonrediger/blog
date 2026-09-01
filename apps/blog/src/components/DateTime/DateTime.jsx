import styles from './DateTime.module.css';

export default function DateTime({ value }) {
  return (
    <span className={styles.dateTime}>
      {new Date(value).toLocaleString(undefined, {
        dateStyle: 'short',
        timeStyle: 'short',
      })}
    </span>
  );
}
