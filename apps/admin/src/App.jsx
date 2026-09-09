import BaseApp, { ApiProvider, PermissionsProvider } from '@blog/ui';

import api from './api-client.js';

export default function App() {
  return (
    <ApiProvider api={api}>
      <PermissionsProvider userRole="admin">
        <BaseApp />
      </PermissionsProvider>
    </ApiProvider>
  );
}
