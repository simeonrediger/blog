import handleSubmit from '@/utils/handle-submit.js';

import styles from './DeleteButton.module.css';

export default function DeleteButton({
  resourceId,
  callApi,
  onDelete,
  className,
}) {
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
    <button
      className={`${className ? className + ' ' : ''}${styles.deleteButton}`}
      onClick={handleDelete}
    >
      Delete
    </button>
  );
}
