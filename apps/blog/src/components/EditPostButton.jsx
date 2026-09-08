import EditButton from './EditButton.jsx';

export default function EditPostButton({ postId }) {
  return <EditButton to={`/posts/${postId}/edit`} />;
}
