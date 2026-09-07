import PermissionsContext from './PermissionsContext.js';

export default function PermissionsProvider({ user, children }) {
  const isAdmin = user?.role === 'admin';

  const permissions = {
    user: { create: isAdmin },
  };

  return (
    <PermissionsContext.Provider value={permissions}>
      {children}
    </PermissionsContext.Provider>
  );
}
