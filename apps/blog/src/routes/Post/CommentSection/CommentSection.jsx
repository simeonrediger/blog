import { useState } from 'react';

import api from '@/api-client.js';
import usePermissions from '@/hooks/usePermissions.js';

import styles from './CommentSection.module.css';
import CommentForm from './CommentForm/CommentForm.jsx';
import CommentList from './CommentList/CommentList.jsx';

export default function CommentSection({
  postId,
  comments,
  onAddComment,
  onEditComment,
}) {
  const [editId, setEditId] = useState(null);
  const permissions = usePermissions();
  const NEW_COMMENT_ID = 'NEW_COMMENT_ID';

  function closeCommentForm() {
    setEditId(null);
  }

  function handleAddComment(data) {
    setEditId(null);
    onAddComment(data);
  }

  function handleEnterEdit(commentId) {
    setEditId(commentId);
  }

  function handleEditComment(data) {
    setEditId(null);
    onEditComment(data);
  }

  return (
    <section className={styles.commentSection}>
      <h2>Comments</h2>
      {permissions.comment.create && (
        <div className={styles.newCommentWrapper}>
          {editId === NEW_COMMENT_ID ? (
            <CommentForm
              headingText="New comment"
              callApi={api.comments.create}
              id={postId}
              handleData={handleAddComment}
              onCancel={closeCommentForm}
            />
          ) : (
            <button onClick={() => setEditId(NEW_COMMENT_ID)}>
              New comment
            </button>
          )}
        </div>
      )}
      <div className={styles.commentListWrapper}>
        {comments.length === 0 ? (
          <p>No one has commented yet.</p>
        ) : (
          <CommentList
            comments={comments}
            editId={editId}
            onCancelEdit={closeCommentForm}
            onEnterEdit={handleEnterEdit}
            onEditComment={handleEditComment}
          />
        )}
      </div>
    </section>
  );
}
