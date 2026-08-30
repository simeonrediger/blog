import { useParams } from 'react-router';

import api from '../../api-client/client.js';
import useFetch from '../../hooks/useFetch.js';

export default function Post() {
  const params = useParams();
  const { post } = useFetch(api.posts.getById, params);
  const { title, content } = post ?? {};

  return (
    <section>
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
}
