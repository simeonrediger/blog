import PermissionsContext from './PermissionsContext.js';

export default function PermissionsProvider({ userRole, children }) {
  const isAdmin = userRole === 'admin';

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
