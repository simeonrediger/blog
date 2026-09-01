import styles from './CommentListItem.module.css';
import DateTime from '@/components/DateTime/DateTime.jsx';

export default function CommentListItem({
  authorName,
  content,
  createdAt,
  editedAt,
}) {
  return (
    <div>
      <div className={styles.info}>
        <h3>{authorName}</h3>
        <p>
          <DateTime value={createdAt} />
          {editedAt !== createdAt && (
            <>
              {' '}
              (edited <DateTime value={editedAt} />)
            </>
          )}
        </p>
      </div>
      <p>{content}</p>
    </div>
  );
}
