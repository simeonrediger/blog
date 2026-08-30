import { Outlet } from 'react-router';

import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.app}>
      <header>
        <h1>Blog</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
