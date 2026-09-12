import { useState } from 'react';
import { useNavigate } from 'react-router';
import { jwtDecode } from 'jwt-decode';

import AuthContext from './AuthContext.js';

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem('accessToken'),
  );
  let claims;

  if (accessToken) {
    try {
      claims = jwtDecode(accessToken);
    } catch (error) {
      localStorage.removeItem('accessToken');
      setAccessToken(null);
    }

    if (claims?.exp && new Date(claims.exp) * 1000 <= Date.now()) {
      localStorage.removeItem('accessToken');
      setAccessToken(null);
    }
  }

  function logIn({ token }) {
    localStorage.setItem('accessToken', token);
    setAccessToken(token);
    navigate('/');
  }

  function logOut() {
    setAccessToken(null);
  }

  const user = accessToken ? { id: claims.sub, role: claims.role } : null;
  const token = accessToken;

  return (
    <AuthContext.Provider value={{ token, user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
