import { Link } from 'react-router';

import styles from './PostListItem.module.css';
import DateTime from '../DateTime/DateTime.jsx';
import PostActions from '../PostActions/PostActions.jsx';

export default function PostListItem({
  id,
  title,
  published,
  createdAt,
  author,
  onDeletePost,
}) {
  return (
    <article className={styles.listItem}>
      <h3>
        <Link to={`/posts/${id}`}>{title}</Link>
      </h3>
      <p>by {author.username}</p>
      <p>
        <DateTime value={createdAt} />
      </p>
      <PostActions
        postId={id}
        published={published}
        onDeletePost={onDeletePost}
      />
    </article>
  );
}
