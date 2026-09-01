import { NavLink, Outlet } from 'react-router';

import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.siteTitle}>Blog</h1>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
