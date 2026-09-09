import { useState } from 'react';

import handleSubmit from '@/utils/handle-submit.js';

import styles from './CommentForm.module.css';
import ErrorList from '@/components/ErrorList/ErrorList.jsx';

export default function CommentForm({
  headingText,
  callApi,
  id,
  handleData,
  onCancel,
  initialAuthorName,
  initialContent,
}) {
  const [authorName, setAuthorName] = useState(initialAuthorName ?? '');
  const [content, setContent] = useState(initialContent ?? '');
  const [errors, setErrors] = useState(null);

  function handleAuthorNameChange(event) {
    setAuthorName(event.target.value);
  }

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function handleCancel() {
    onCancel();
    setErrors(null);
  }

  return (
    <form
      className={styles.commentForm}
      onSubmit={event =>
        handleSubmit({
          event,
          callApi,
          params: { id },
          fields: ['authorName', 'content'],
          handleData,
          handleError: setErrors,
        })
      }
    >
      <h3>{headingText}</h3>
      <input
        name="authorName"
        aria-label="Display name"
        placeholder="Display name"
        value={authorName}
        onChange={handleAuthorNameChange}
        required
      />
      <textarea
        name="content"
        aria-label="Message"
        placeholder="Message"
        value={content}
        onChange={handleContentChange}
        className={styles.messageInput}
        required
      ></textarea>
      {errors?.length > 0 && <ErrorList errors={errors} />}
      <div className={styles.buttonRow}>
        <button onClick={handleCancel}>Cancel</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
