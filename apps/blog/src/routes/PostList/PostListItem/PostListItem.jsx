import { Link } from 'react-router';

import styles from './PostListItem.module.css';

export default function PostListItem({ id, title, createdAt, author }) {
  return (
    <article className={styles.listItem}>
      <h3>
        <Link to={`/posts/${id}`}>{title}</Link>
      </h3>
      <p>by {author.username}</p>
      <p className={styles.createdAt}>{new Date(createdAt).toLocaleString()}</p>
    </article>
  );
}
