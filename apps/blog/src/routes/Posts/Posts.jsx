import { useEffect, useState } from 'react';

import api from '../../api-client/client.js';

import Post from './Post/Post.jsx';

export default function Posts() {
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
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Post {...post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
