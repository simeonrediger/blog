import { handleSubmit } from '@blog/api-client';

import api from '@/api-client.js';

import styles from './DeletePostButton.module.css';

export default function DeletePostButton({ postId, onDeletePost }) {
  function handleDeletePost() {
    handleSubmit({
      callApi: api.posts.delete,
      params: { id: postId },
      handleData: () => onDeletePost(postId),
      handleError: error => {
        if (error) {
          console.error(error);
        }
      },
    });
  }

  return (
    <button className={styles.deletePostButton} onClick={handleDeletePost}>
      Delete
    </button>
  );
}
