import styles from './CommentForm.module.css';

export default function CommentForm() {
  return (
    <form className={styles.commentForm}>
      <h3>Post a comment</h3>
      <input aria-label="Display name" placeholder="Display name" />
      <textarea
        aria-label="Message"
        placeholder="Message"
        className={styles.messageInput}
      ></textarea>
    </form>
  );
}
