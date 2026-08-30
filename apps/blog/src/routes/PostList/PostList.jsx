import api from '../../api-client/client.js';
import useFetch from '../../hooks/useFetch.js';

import styles from './PostList.module.css';
import PostListItem from './PostListItem/PostListItem.jsx';

export default function PostList() {
  const { posts = [] } = useFetch(api.posts.getAll);

  return (
    <div>
      <h2>Posts</h2>
      <ul className={styles.list}>
        {posts.map(post => (
          <li key={post.id}>
            <PostListItem {...post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
