import api from '@/api-client.js';

import styles from './CommentList.module.css';
import CommentForm from '../CommentForm/CommentForm.jsx';
import CommentListItem from './CommentListItem/CommentListItem.jsx';

export default function CommentList({
  comments,
  editId,
  onCancelEdit,
  onEnterEdit,
  onEditComment,
}) {
  return (
    <ul className={styles.commentList}>
      {comments.map(comment => (
        <li key={comment.id}>
          {comment.id === editId ? (
            <CommentForm
              headingText="Edit comment"
              callApi={api.comments.update}
              id={comment.id}
              handleData={onEditComment}
              onCancel={onCancelEdit}
              initialAuthorName={comment.authorName}
              initialContent={comment.content}
            />
          ) : (
            <CommentListItem {...comment} onEnterEdit={onEnterEdit} />
          )}
        </li>
      ))}
    </ul>
  );
}
