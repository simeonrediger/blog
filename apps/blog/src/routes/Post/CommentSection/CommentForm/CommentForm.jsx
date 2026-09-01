import { useState } from 'react';

import api from '../../../../api-client/client.js';
import handleSubmit from '../../../../api-client/api-utils.js';

import styles from './CommentForm.module.css';
import ErrorList from '../../../../components/ErrorList/ErrorList.jsx';

export default function CommentForm({ postId, onAddComment }) {
  const [formOpen, setFormOpen] = useState(false);
  const [errors, setErrors] = useState(null);

  function toggleCommentForm() {
    setFormOpen(!formOpen);
    setErrors(null);
  }

  function handleAddComment(data) {
    onAddComment(data);
    setFormOpen(false);
  }

  return formOpen ? (
    <form
      className={styles.commentForm}
      onSubmit={event =>
        handleSubmit({
          event,
          callApi: api.posts.createComment,
          params: { id: postId },
          fields: ['authorName', 'content'],
          handleData: handleAddComment,
          handleError: setErrors,
        })
      }
    >
      <h3>Post a comment</h3>
      <input
        name="authorName"
        aria-label="Display name"
        placeholder="Display name"
      />
      <textarea
        name="content"
        aria-label="Message"
        placeholder="Message"
        className={styles.messageInput}
      ></textarea>
      {errors?.length > 0 && <ErrorList errors={errors} />}
      <div className={styles.buttonRow}>
        <CancelButton enabled={formOpen} onClick={toggleCommentForm} />
        <button type="submit">Submit</button>
      </div>
    </form>
  ) : (
    <CancelButton enabled={formOpen} onClick={toggleCommentForm} />
  );
}

const CancelButton = ({ enabled, onClick }) => (
  <button className={styles.toggleCommentFormButton} onClick={onClick}>
    {enabled ? 'Cancel' : 'New comment'}
  </button>
);
