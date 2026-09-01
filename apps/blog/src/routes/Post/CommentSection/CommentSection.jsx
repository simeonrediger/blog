import { useState } from 'react';

import styles from './CommentSection.module.css';
import CommentForm from './CommentForm/CommentForm.jsx';
import CommentList from './CommentList/CommentList.jsx';

export default function CommentSection({ postId, comments, onAddComment }) {
  const [formOpen, setFormOpen] = useState(false);

  function toggleCommentForm() {
    setFormOpen(!formOpen);
  }

  function handleAddComment(data) {
    onAddComment(data);
    setFormOpen(false);
  }

  return (
    <section className={styles.commentSection}>
      <h2>Comments</h2>
      {comments.length === 0 ? (
        <p>No one has commented yet.</p>
      ) : (
        <CommentList comments={comments} />
      )}
      {formOpen && (
        <CommentForm postId={postId} onAddComment={handleAddComment} />
      )}
      <button
        className={styles.toggleCommentFormButton}
        onClick={toggleCommentForm}
      >
        {formOpen ? 'Cancel' : 'New comment'}
      </button>
    </section>
  );
}
