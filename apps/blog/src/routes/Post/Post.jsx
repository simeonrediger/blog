import { useNavigate, useParams } from 'react-router';

import api from '@/api-client.js';
import useFetch from '@/hooks/useFetch.js';

import styles from './Post.module.css';
import CommentSection from './CommentSection/CommentSection.jsx';
import DateTime from '@/components/DateTime/DateTime.jsx';
import ErrorPage from '@/components/ErrorPage/ErrorPage.jsx';
import PageLoader from '@/components/PageLoader/PageLoader.jsx';
import PostActions from '@/components/PostActions/PostActions.jsx';

export default function Post() {
  const params = useParams();
  const navigate = useNavigate();
  const { data, setData, loading, error } = useFetch(api.posts.getById, params);

  if (loading) {
    return <PageLoader />;
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

  function handleDeletePost() {
    navigate('/');
  }

  function addComment({ comment }) {
    const newData = {
      ...data,
      post: { ...data.post, comments: [comment, ...data.post.comments] },
    };

    setData(newData);
  }

  function editComment({ comment }) {
    const commentIndex = data.post.comments.findIndex(c => c.id === comment.id);

    const newData = {
      ...data,
      post: {
        ...data.post,
        comments: data.post.comments.toSpliced(commentIndex, 1, comment),
      },
    };

    setData(newData);
  }

  const {
    id,
    title,
    content,
    published,
    createdAt,
    editedAt,
    author,
    comments,
  } = data.post;

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
        <PostActions
          postId={id}
          published={published}
          onDeletePost={handleDeletePost}
        />
        <p className={styles.content}>{content}</p>
      </section>
      <CommentSection
        postId={id}
        comments={comments}
        onAddComment={addComment}
        onEditComment={editComment}
      />
    </>
  );
}
