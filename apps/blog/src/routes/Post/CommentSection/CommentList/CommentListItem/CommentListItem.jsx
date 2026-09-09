import styles from './CommentListItem.module.css';
import DateTime from '@/components/DateTime/DateTime.jsx';

export default function CommentListItem({
  authorName,
  content,
  createdAt,
}) {
  return (
    <>
      <div className={styles.info}>
        <h3>{authorName}</h3>
        <p>
          <DateTime value={createdAt} />
        </p>
      </div>
      <p>{content}</p>
    </>
  );
}
