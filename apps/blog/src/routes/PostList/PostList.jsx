import api from '../../api-client/client.js';
import useFetch from '../../hooks/useFetch.js';

import styles from './PostList.module.css';
import ErrorPage from '../ErrorPage/ErrorPage.jsx';
import PostListItem from './PostListItem/PostListItem.jsx';

export default function PostList() {
  const { data, loading, error } = useFetch(api.posts.getAll);
  const { posts = [] } = data ?? {};

  if (loading) {
    return 'Loading...';
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <section>
      <h2>Posts</h2>
      <ul className={styles.list}>
        {posts.map(post => (
          <li key={post.id}>
            <PostListItem {...post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
