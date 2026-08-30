import { useParams } from 'react-router';

import api from '../../api-client/client.js';
import useFetch from '../../hooks/useFetch.js';

import ErrorPage from '../ErrorPage/ErrorPage.jsx';

export default function Post() {
  const params = useParams();
  const { data, error } = useFetch(api.posts.getById, params);
  const { title, content } = data.post ?? {};

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <section>
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
}
