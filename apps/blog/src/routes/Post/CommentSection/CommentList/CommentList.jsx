import styles from './CommentList.module.css';
import CommentListItem from './CommentListItem/CommentListItem.jsx';

export default function CommentList({ comments }) {
  return (
    <ul className={styles.commentList}>
      {comments.map(comment => (
        <li key={comment.id}>
          <CommentListItem {...comment} />
        </li>
      ))}
    </ul>
  );
}
