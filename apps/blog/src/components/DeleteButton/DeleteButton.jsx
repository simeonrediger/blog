import { handleSubmit } from '@blog/api-client';

import styles from './DeleteButton.module.css';

export default function DeleteButton({ resourceId, callApi, onDelete }) {
  function handleDelete() {
    handleSubmit({
      callApi,
      params: { id: resourceId },
      handleData: () => onDelete(resourceId),
      handleError: error => {
        if (error) {
          console.error(error);
        }
      },
    });
  }

  return (
    <button className={styles.deleteButton} onClick={handleDelete}>
      Delete
    </button>
  );
}
