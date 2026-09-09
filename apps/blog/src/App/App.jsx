import { Outlet } from 'react-router';

import api from '@/api-client.js';
import ApiProvider from '@/context/api/ApiProvider.jsx';
import PermissionsProvider from '@/context/permissions/PermissionsProvider.jsx';

import styles from './App.module.css';
import Header from './Header/Header.jsx';

export default function App() {
  return (
    <ApiProvider api={api}>
      <PermissionsProvider>
        <div className={styles.app}>
          <div className={styles.content}>
            <Header />
            <main>
              <Outlet />
            </main>
          </div>
        </div>
      </PermissionsProvider>
    </ApiProvider>
  );
}
