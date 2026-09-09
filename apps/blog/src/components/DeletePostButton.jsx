import useApi from '@/hooks/useApi.js';

import DeleteButton from './DeleteButton/DeleteButton.jsx';

export default function DeletePostButton({ postId, onDeletePost, className }) {
  const api = useApi();

  return (
    <DeleteButton
      resourceId={postId}
      callApi={api.posts.delete}
      onDelete={onDeletePost}
      className={className}
    />
  );
}
