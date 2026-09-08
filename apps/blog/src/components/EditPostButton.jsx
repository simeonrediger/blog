import EditButton from './EditButton/EditButton.jsx';

export default function EditPostButton({ postId }) {
  return <EditButton to={`/posts/${postId}/edit`} />;
}
