import { useEffect, useState } from 'react';

import api from '../../api-client/client.js';

import styles from './PostList.module.css';
import PostListItem from './PostListItem/PostListItem.jsx';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.posts
      .getAll()
      .then(res => {
        if (!res.ok) {
          let error = `HTTP ${res.status}`;

          if (res.statusText) {
            error += `: ${res.statusText}`;
          }

          throw new Error(error);
        }

        return res.json();
      })
      .then(data => {
        setPosts(data.posts);
      })
      .catch(console.error);
  }, []);

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
