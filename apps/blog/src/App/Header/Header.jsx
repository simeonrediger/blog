import { NavLink } from 'react-router';

import usePermissions from '../../hooks/usePermissions.js';

import styles from './Header.module.css';

export default function Header() {
  const permissions = usePermissions();

  return (
    <header className={styles.header}>
      <h1 className={styles.siteTitle}>Blog</h1>
      <nav>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {permissions.user.create && (
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
