export function getAccessToken() {
  return localStorage.getItem('accessToken');
}

export function applyAuth(options) {
  const accessToken = getAccessToken();

  if (!accessToken) {
    return;
  }

  options.headers ??= {};
  options.headers.authorization = `Bearer ${accessToken}`;
}
