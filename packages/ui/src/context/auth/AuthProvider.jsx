import { jwtDecode } from 'jwt-decode';

import { getAccessToken, removeAccessToken } from '../../auth/access-token.js';

import AuthContext from './AuthContext.js';

export default function AuthProvider({ children }) {
  const accessToken = getAccessToken();
  let claims;

  if (accessToken) {
    try {
      claims = jwtDecode(accessToken);
    } catch (error) {
      removeAccessToken();
    }

    if (claims.exp && new Date(claims.exp) * 1000 <= Date.now()) {
      removeAccessToken();
      claims = null;
    }
  }

  const user = claims ? { id: claims.sub, role: claims.role } : null;
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
