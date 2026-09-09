import api from '@/api-client.js';
import ApiProvider from '@/context/api/ApiProvider.jsx';
import PermissionsProvider from '@/context/permissions/PermissionsProvider.jsx';

import BaseApp from './BaseApp/BaseApp.jsx';

export default function App() {
  return (
    <ApiProvider api={api}>
      <PermissionsProvider>
        <BaseApp />
      </PermissionsProvider>
    </ApiProvider>
  );
}
