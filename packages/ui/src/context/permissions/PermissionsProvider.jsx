import useAuth from '../../hooks/useAuth.js';

import PermissionsContext from './PermissionsContext.js';

export default function PermissionsProvider({ children }) {
  const user = useAuth();
  const isAdmin = user?.role === 'admin';

  const permissions = {
    user: { create: isAdmin },
    post: { create: isAdmin, update: isAdmin, delete: isAdmin },
    comment: { create: true, update: isAdmin, delete: isAdmin },
  };

  return (
    <PermissionsContext.Provider value={permissions}>
      {children}
    </PermissionsContext.Provider>
  );
}
