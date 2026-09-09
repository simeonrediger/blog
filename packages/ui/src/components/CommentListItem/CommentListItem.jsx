import styles from './CommentListItem.module.css';
import CommentActions from '../CommentActions/CommentActions.jsx';
import DateTime from '../DateTime/DateTime.jsx';

export default function CommentListItem({
  id,
  authorName,
  content,
  createdAt,
  onEnterEdit,
  onDeleteComment,
}) {
  function handleEnterEdit() {
    onEnterEdit(id);
  }

  return (
    <>
      <div className={styles.info}>
        <h3>{authorName}</h3>
        <p>
          <DateTime value={createdAt} />
        </p>
      </div>
      <p>{content}</p>
      <CommentActions
        commentId={id}
        onEnterEdit={handleEnterEdit}
        onDeleteComment={onDeleteComment}
      />
    </>
  );
}
