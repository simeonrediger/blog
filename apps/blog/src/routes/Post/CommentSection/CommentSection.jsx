import CommentList from './CommentList/CommentList.jsx';

export default function CommentSection({ comments }) {
  return (
    <section>
      <h2>Comments</h2>
      <CommentList comments={comments} />
    </section>
  );
}
