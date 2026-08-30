import { useParams } from 'react-router';

import api from '../../api-client/client.js';
import useFetch from '../../hooks/useFetch.js';

export default function Post() {
  const params = useParams();
  const { post } = useFetch(api.posts.getById, params);
  const { title } = post ?? {};

  return <section>{title}</section>;
}
