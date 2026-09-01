import styles from './CommentSection.module.css';
import CommentForm from './CommentForm/CommentForm.jsx';
import CommentList from './CommentList/CommentList.jsx';

export default function CommentSection({ postId, comments, onAddComment }) {
  return (
    <section className={styles.commentSection}>
      <h2>Comments</h2>
      <div className={styles.commentListWrapper}>
        {comments.length === 0 ? (
          <p>No one has commented yet.</p>
        ) : (
          <CommentList comments={comments} />
        )}
      </div>
      <CommentForm postId={postId} onAddComment={onAddComment} />
    </section>
  );
}
