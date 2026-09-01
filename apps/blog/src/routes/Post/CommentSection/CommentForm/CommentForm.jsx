import { useState } from 'react';

import api from '../../../../api-client/client.js';
import handleSubmit from '../../../../api-client/api-utils.js';

import styles from './CommentForm.module.css';
import ErrorList from '../../../../components/ErrorList/ErrorList.jsx';

export default function CommentForm({ postId, onAddComment }) {
  const [errors, setErrors] = useState(null);

  return (
    <form
      className={styles.commentForm}
      onSubmit={event =>
        handleSubmit({
          event,
          callApi: api.posts.createComment,
          params: { id: postId },
          fields: ['authorName', 'content'],
          handleData: onAddComment,
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
      <button type="submit">Submit</button>
    </form>
  );
}
