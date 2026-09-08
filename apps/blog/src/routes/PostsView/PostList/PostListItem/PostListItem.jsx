import { Link } from 'react-router';

import usePermissions from '@/hooks/usePermissions.js';

import styles from './PostListItem.module.css';
import DateTime from '@/components/DateTime/DateTime.jsx';
import EditPostButton from '@/components/EditPostButton.jsx';
import PublishToggle from '@/components/PublishToggle/PublishToggle.jsx';

export default function PostListItem({
  id,
  title,
  published,
  createdAt,
  author,
}) {
  const permissions = usePermissions();

  return (
    <article className={styles.listItem}>
      <h3>
        <Link to={`/posts/${id}`}>{title}</Link>
      </h3>
      <p>by {author.username}</p>
      <p>
        <DateTime value={createdAt} />
      </p>
      {permissions.post.update && (
        <div className={styles.actions}>
          <EditPostButton postId={id} />
          <PublishToggle postId={id} initialPublished={published} />
        </div>
      )}
    </article>
  );
}
