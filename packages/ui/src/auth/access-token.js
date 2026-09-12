export function getAccessToken() {
  return localStorage.getItem('accessToken');
}

export function removeAccessToken() {
  return localStorage.removeItem('accessToken');
}

export function applyAuth(options) {
  const accessToken = getAccessToken();

  if (!accessToken) {
    return;
  }

  options.headers ??= {};
  options.headers.authorization = `Bearer ${accessToken}`;
}
