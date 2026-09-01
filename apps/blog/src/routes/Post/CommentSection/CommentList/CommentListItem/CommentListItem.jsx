import DateTime from '@/components/DateTime/DateTime.jsx';

export default function CommentListItem({
  authorName,
  content,
  createdAt,
  editedAt,
}) {
  return (
    <div>
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
      <p>{content}</p>
    </div>
  );
}
