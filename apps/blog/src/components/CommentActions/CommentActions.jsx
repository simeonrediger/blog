import usePermissions from '@/hooks/usePermissions.js';

import styles from './CommentActions.module.css';
import DeleteCommentButton from '@/components/DeleteCommentButton.jsx';
import EditCommentButton from '@/components/EditCommentButton.jsx';

export default function CommentActions({
  commentId,
  onEnterEdit,
  onDeleteComment,
}) {
  const permissions = usePermissions();

  return (
    (permissions.comment.update || permissions.comment.delete) && (
      <div className={styles.actions}>
        {permissions.comment.update && (
          <EditCommentButton onClick={onEnterEdit} />
        )}
        {permissions.comment.delete && (
          <DeleteCommentButton
            commentId={commentId}
            onDeleteComment={onDeleteComment}
          />
        )}
      </div>
    )
  );
}
