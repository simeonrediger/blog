import { Link } from 'react-router';

import styles from './EditButton.module.css';

export default function EditButton({ isLink, onClick, to }) {
  return isLink ? (
    <Link to={to} className={styles.editButton}>
      Edit
    </Link>
  ) : (
    <button onClick={onClick} className={styles.editButton}>
      Edit
    </button>
  );
}
