import styles from './Post.module.css';

export default function Post({ title, createdAt, author }) {
  return (
    <article className={styles.listItem}>
      <h3>{title}</h3>
      <p>by {author.username}</p>
      <p className={styles.createdAt}>{new Date(createdAt).toLocaleString()}</p>
    </article>
  );
}
