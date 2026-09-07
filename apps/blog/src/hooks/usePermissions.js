import { useContext } from 'react';

import PermissionsContext from '@/context/PermissionsContext.js';

export default function usePermissions() {
  return useContext(PermissionsContext);
}
