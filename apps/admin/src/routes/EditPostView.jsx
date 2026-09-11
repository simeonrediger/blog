import { useNavigate, useParams } from 'react-router';

import { useFetch, ErrorPage, PageLoader } from '@blog/ui';

import api from '../api-client.js';

import PostForm from '../components/PostForm/PostForm.jsx';

export default function EditPostView() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, loading, error } = useFetch(api.posts.getById, { id });

  function handleData({ post }) {
    navigate(`/posts/${post.id}`);
  }

  if (loading) {
    return <PageLoader />;
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <PostForm
      post={data.post}
      callApi={api.posts.update}
      handleData={handleData}
    />
  );
}
