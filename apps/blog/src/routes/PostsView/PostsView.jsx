import { Link } from 'react-router';

import useApi from '@/hooks/useApi.js';
import useFetch from '@/hooks/useFetch.js';
import usePermissions from '@/hooks/usePermissions.js';

import styles from './PostsView.module.css';
import ErrorPage from '@/components/ErrorPage/ErrorPage.jsx';
import PageLoader from '@/components/PageLoader/PageLoader.jsx';
import PostList from './PostList/PostList.jsx';

export default function PostsView() {
  const api = useApi();
  const permissions = usePermissions();
  const { data, setData, loading, error } = useFetch(api.posts.getAll);

  if (loading) {
    return <PageLoader />;
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

  function handleDeletePost(postId) {
    const newData = { posts: [...posts.filter(post => post.id !== postId)] };
    setData(newData);
  }

  const { posts } = data;

  return (
    <section>
      <h2 className="pageTitle">Posts</h2>
      {permissions.post.create && (
        <Link to="/new-post" className={`${styles.newPostLink} button`}>
          New post
        </Link>
      )}
      {posts.length === 0 ? (
        <p>No one has posted yet.</p>
      ) : (
        <PostList posts={posts} onDeletePost={handleDeletePost} />
      )}
    </section>
  );
}
