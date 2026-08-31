import styles from './CommentSection.module.css';
import CommentList from './CommentList/CommentList.jsx';

export default function CommentSection({ comments }) {
  return (
    <section className={styles.commentSection}>
      <h2>Comments</h2>
      <CommentList comments={comments} />
    </section>
  );
}
