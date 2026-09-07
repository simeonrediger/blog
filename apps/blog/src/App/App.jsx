import { Outlet } from 'react-router';

import styles from './App.module.css';
import Header from './Header/Header.jsx';
import PermissionsProvider from '@/context/PermissionsProvider.jsx';

export default function App() {
  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <PermissionsProvider>
          <Header />
          <main>
            <Outlet />
          </main>
        </PermissionsProvider>
      </div>
    </div>
  );
}
