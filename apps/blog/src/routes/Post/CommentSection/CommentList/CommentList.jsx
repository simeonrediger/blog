import CommentListItem from './CommentListItem/CommentListItem.jsx';

export default function CommentList({ comments = [] }) {
  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <CommentListItem {...comment} />
        </li>
      ))}
    </ul>
  );
}
