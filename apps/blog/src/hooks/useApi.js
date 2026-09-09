import { useContext } from 'react';

import ApiContext from '@/context/api/ApiContext.js';

export default function useApi() {
  return useContext(ApiContext);
}
