import { useNavigate } from 'react-router';

import api from '../api-client.js';

import PostForm from '../components/PostForm/PostForm.jsx';

export default function NewPostView() {
  const navigate = useNavigate();

  function handleData({ post }) {
    navigate(`/posts/${post.id}`);
  }

  return <PostForm callApi={api.posts.create} handleData={handleData} />;
}
