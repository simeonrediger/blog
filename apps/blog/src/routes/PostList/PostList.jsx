import api from '@/api-client.js';
import useFetch from '@/hooks/useFetch.js';

import styles from './PostList.module.css';
import ErrorPage from '../ErrorPage/ErrorPage.jsx';
import PageLoader from '@/components/PageLoader/PageLoader.jsx';
import PostListItem from './PostListItem/PostListItem.jsx';

export default function PostList() {
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
        <ul className={styles.list}>
          {posts.map(post => (
            <li key={post.id}>
              <PostListItem {...post} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
