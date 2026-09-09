import EditButton from './EditButton/EditButton.jsx';

export default function EditPostButton({ postId }) {
  return <EditButton isLink={true} to={`/posts/${postId}/edit`} />;
}
