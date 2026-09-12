import { useState } from 'react';
import { useNavigate } from 'react-router';
import { jwtDecode } from 'jwt-decode';

import AuthContext from './AuthContext.js';

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem('accessToken'));
  let claims;

  if (token) {
    try {
      claims = jwtDecode(token);
    } catch (error) {
      localStorage.removeItem('accessToken');
      setToken(null);
    }

    if (claims?.exp && new Date(claims.exp) * 1000 <= Date.now()) {
      localStorage.removeItem('accessToken');
      setToken(null);
    }
  }

  function logIn({ token }) {
    localStorage.setItem('accessToken', token);
    setToken(token);
    navigate('/');
  }

  function logOut() {
    setToken(null);
  }

  const user = token ? { id: claims.sub, role: claims.role } : null;

  return (
    <AuthContext.Provider value={{ token, user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
