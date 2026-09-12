import BaseApp, {
  ApiProvider,
  AuthProvider,
  PermissionsProvider,
} from '@blog/ui';

import api from './api-client.js';

export default function App() {
  return (
    <ApiProvider api={api}>
      <AuthProvider>
        <PermissionsProvider canAuth={true}>
          <BaseApp />
        </PermissionsProvider>
      </AuthProvider>
    </ApiProvider>
  );
}
