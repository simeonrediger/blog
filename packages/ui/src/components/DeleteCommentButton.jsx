import useApi from '../hooks/useApi.js';

import DeleteButton from './DeleteButton/DeleteButton.jsx';

export default function DeleteCommentButton({
  commentId,
  onDeleteComment,
  className,
}) {
  const api = useApi();

  return (
    <DeleteButton
      resourceId={commentId}
      callApi={api.comments.delete}
      onDelete={onDeleteComment}
      className={className}
    />
  );
}
