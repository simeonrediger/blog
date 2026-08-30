import { Link } from 'react-router';

import styles from './PostListItem.module.css';
import DateTime from '../../../components/DateTime.jsx';

export default function PostListItem({ id, title, createdAt, author }) {
  return (
    <article className={styles.listItem}>
      <h3>
        <Link to={`/posts/${id}`}>{title}</Link>
      </h3>
      <p>by {author.username}</p>
      <p>
        <DateTime value={createdAt} />
      </p>
    </article>
  );
}
