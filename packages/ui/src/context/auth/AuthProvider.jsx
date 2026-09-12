import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';

import { getAccessToken, removeAccessToken } from '../../auth/access-token.js';

import AuthContext from './AuthContext.js';

export default function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(getAccessToken());

  if (accessToken) {
    try {
      claims = jwtDecode(accessToken);
    } catch (error) {
      removeAccessToken();
      setAccessToken(null);
    }

    if (claims.exp && new Date(claims.exp) * 1000 <= Date.now()) {
      removeAccessToken();
      setAccessToken(null);
    }
  }

  function logOut() {
    setAccessToken(null);
  }

  const user = accessToken ? { id: claims.sub, role: claims.role } : null;
  return (
    <AuthContext.Provider value={{ user, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
