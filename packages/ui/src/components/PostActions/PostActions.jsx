import usePermissions from '../../hooks/usePermissions.js';

import styles from './PostActions.module.css';
import DeletePostButton from '../DeletePostButton.jsx';
import EditPostButton from '../EditPostButton.jsx';
import PublishToggle from '../PublishToggle/PublishToggle.jsx';

export default function PostActions({ postId, published, onDeletePost }) {
  const permissions = usePermissions();

  return (
    (permissions.post.update || permissions.post.delete) && (
      <div className={styles.actions}>
        {permissions.post.update && (
          <>
            <EditPostButton postId={postId} />
            <PublishToggle postId={postId} initialPublished={published} />
          </>
        )}
        {permissions.post.delete && (
          <DeletePostButton
            postId={postId}
            onDeletePost={onDeletePost}
            className={styles.deletePostButton}
          />
        )}
      </div>
    )
  );
}
