import api from '@/api-client.js';

import DeleteButton from './DeleteButton/DeleteButton.jsx';

export default function DeletePostButton({ postId, onDeletePost, className }) {
  return (
    <DeleteButton
      resourceId={postId}
      callApi={api.posts.delete}
      onDelete={onDeletePost}
      className={className}
    />
  );
}
