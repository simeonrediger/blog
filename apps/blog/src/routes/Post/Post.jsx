import { useParams } from 'react-router';

import api from '../../api-client/client.js';
import useFetch from '../../hooks/useFetch.js';

import ErrorPage from '../ErrorPage/ErrorPage.jsx';
import PageLoader from '../../components/PageLoader/PageLoader.jsx';

export default function Post() {
  const params = useParams();
  const { data, loading, error } = useFetch(api.posts.getById, params);
  const { title, content } = data.post ?? {};

  if (error) {
    return <ErrorPage error={error} />;
  }

  if (loading) {
    return <PageLoader />;
  }

  return (
    <section>
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
}
