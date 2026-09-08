import { Link } from 'react-router';

import styles from './EditButton.module.css';

export default function EditButton({ to }) {
  return (
    <Link to={to} className={styles.editButton}>
      Edit
    </Link>
  );
}
