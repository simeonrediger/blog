import { NavLink } from 'react-router';

import useAuth from '../../hooks/useAuth.js';
import usePermissions from '../../hooks/usePermissions.js';

import styles from './Header.module.css';

export default function Header() {
  const { user, logOut } = useAuth();
  const permissions = usePermissions();

  return (
    <header className={styles.header}>
      <h1 className={styles.siteTitle}>Blog</h1>
      <nav>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {user ? (
            <li>
              <button onClick={logOut} className="link">
                Log out
              </button>
            </li>
          ) : (
            <>
              {permissions.user.create && (
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
              )}
              {permissions.token.create && (
                <li>
                  <NavLink to="/log-in">Log in</NavLink>
                </li>
              )}
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
