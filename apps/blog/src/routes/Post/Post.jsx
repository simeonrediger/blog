import { useParams } from 'react-router';

import api from '../../api-client/client.js';
import useFetch from '../../hooks/useFetch.js';

export default function Post() {
  const { id } = useParams();
  const { post } = useFetch(api.posts.getById, id);

  return <div>{post?.title}</div>;
}
