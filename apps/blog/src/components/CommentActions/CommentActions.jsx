import usePermissions from '@/hooks/usePermissions.js';

import styles from './CommentActions.module.css';
import EditCommentButton from '@/components/EditCommentButton.jsx';

export default function CommentActions({ onEnterEdit }) {
  const permissions = usePermissions();

  return (
    permissions.comment.update && (
      <div className={styles.actions}>
        <EditCommentButton onClick={onEnterEdit} />
      </div>
    )
  );
}
