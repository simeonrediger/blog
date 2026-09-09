import { useContext } from 'react';

import PermissionsContext from '../context/permissions/PermissionsContext.js';

export default function usePermissions() {
  return useContext(PermissionsContext);
}
