import styles from './PostList.module.css';
import PostListItem from './PostListItem/PostListItem.jsx';

export default function PostList({ posts }) {
  return (
    <ul className={styles.list}>
      {posts.map(post => (
        <li key={post.id}>
          <PostListItem {...post} />
        </li>
      ))}
    </ul>
  );
}
