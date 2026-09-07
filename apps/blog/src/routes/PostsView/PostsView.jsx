import api from '@/api-client.js';
import useFetch from '@/hooks/useFetch.js';

import ErrorPage from '@/components/ErrorPage/ErrorPage.jsx';
import PageLoader from '@/components/PageLoader/PageLoader.jsx';
import PostList from './PostList/PostList.jsx';

export default function PostsView() {
  const { data, loading, error } = useFetch(api.posts.getAll);

  if (loading) {
    return <PageLoader />;
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

  const { posts } = data;

  return (
    <section>
      <h2 className="pageTitle">Posts</h2>
      {posts.length === 0 ? (
        <p>No one has posted yet.</p>
      ) : (
        <PostList posts={posts} />
      )}
    </section>
  );
}
