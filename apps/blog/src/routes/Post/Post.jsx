import { useParams } from 'react-router';

import api from '@/api-client/client.js';
import useFetch from '@/hooks/useFetch.js';

import styles from './Post.module.css';
import CommentSection from './CommentSection/CommentSection.jsx';
import DateTime from '@/components/DateTime/DateTime.jsx';
import ErrorPage from '../ErrorPage/ErrorPage.jsx';
import PageLoader from '@/components/PageLoader/PageLoader.jsx';

export default function Post() {
  const params = useParams();
  const { data, setData, loading, error } = useFetch(api.posts.getById, params);

  if (error) {
    return <ErrorPage error={error} />;
  }

  if (loading) {
    return <PageLoader />;
  }

  function addComment({ comment }) {
    const newData = {
      ...data,
      post: { ...data.post, comments: [comment, ...data.post.comments] },
    };

    setData(newData);
  }

  const { id, title, content, createdAt, editedAt, author, comments } =
    data.post;

  return (
    <>
      <section>
        <h2 className="pageTitle">{title}</h2>
        <p>by {author.username}</p>
        <p className={styles.timestamps}>
          <DateTime value={createdAt} />
          {editedAt !== createdAt && (
            <>
              {' '}
              (edited <DateTime value={editedAt} />)
            </>
          )}
        </p>
        <p className={styles.content}>{content}</p>
      </section>
      <CommentSection
        postId={id}
        comments={comments}
        onAddComment={addComment}
      />
    </>
  );
}
