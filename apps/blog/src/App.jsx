import api from './api-client.js';
import { ApiProvider, PermissionsProvider } from '@blog/ui';

import BaseApp from '@blog/ui';

export default function App() {
  return (
    <ApiProvider api={api}>
      <PermissionsProvider>
        <BaseApp />
      </PermissionsProvider>
    </ApiProvider>
  );
}
