import PermissionsContext from './PermissionsContext.js';

export default function PermissionsProvider({ user, children }) {
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
