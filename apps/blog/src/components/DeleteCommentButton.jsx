import api from '@/api-client.js';

import DeleteButton from './DeleteButton/DeleteButton.jsx';

export default function DeleteCommentButton({
  commentId,
  onDeleteComment,
  className,
}) {
  return (
    <DeleteButton
      resourceId={commentId}
      callApi={api.comments.delete}
      onDelete={onDeleteComment}
      className={className}
    />
  );
}
