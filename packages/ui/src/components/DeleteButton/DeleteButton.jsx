import handleSubmit from '../../utils/handle-submit.js';
import useAuth from '../../hooks/useAuth.js';

import styles from './DeleteButton.module.css';

export default function DeleteButton({
  resourceId,
  callApi,
  onDelete,
  className,
}) {
  const { token } = useAuth();

  function handleDelete() {
    handleSubmit({
      callApi,
      params: { id: resourceId },
      token,
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
