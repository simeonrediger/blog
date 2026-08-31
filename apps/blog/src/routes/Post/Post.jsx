import { useParams } from 'react-router';

import api from '../../api-client/client.js';
import useFetch from '../../hooks/useFetch.js';

import CommentSection from './CommentSection/CommentSection.jsx';
import DateTime from '../../components/DateTime.jsx';
import ErrorPage from '../ErrorPage/ErrorPage.jsx';
import PageLoader from '../../components/PageLoader/PageLoader.jsx';

export default function Post() {
  const params = useParams();
  const { data, loading, error } = useFetch(api.posts.getById, params);

  if (error) {
    return <ErrorPage error={error} />;
  }

  if (loading) {
    return <PageLoader />;
  }

  const { title, content, createdAt, editedAt, author, comments } = data.post;

  return (
    <>
      <section>
        <h2>{title}</h2>
        <p>by {author.username}</p>
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
      </section>
      <CommentSection comments={comments} />
    </>
  );
}
