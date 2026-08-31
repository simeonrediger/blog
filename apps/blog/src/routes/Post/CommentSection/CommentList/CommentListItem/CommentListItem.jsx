export default function CommentListItem({ authorName, content }) {
  return (
    <div>
      <h3>{authorName}</h3>
      <p>{content}</p>
    </div>
  );
}
