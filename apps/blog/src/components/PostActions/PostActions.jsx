import usePermissions from '@/hooks/usePermissions.js';

import styles from './PostActions.module.css';
import DeletePostButton from '@/components/DeletePostButton.jsx';
import EditPostButton from '@/components/EditPostButton.jsx';
import PublishToggle from '@/components/PublishToggle/PublishToggle.jsx';

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
