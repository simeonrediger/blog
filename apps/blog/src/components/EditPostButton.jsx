import { Link } from 'react-router';

export default function EditPostButton({ postId }) {
  return <Link to={`/posts/${postId}/edit`}>Edit</Link>;
}
