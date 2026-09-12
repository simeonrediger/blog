export default function applyAuth(options, token) {
  options.headers ??= {};
  options.headers.authorization = `Bearer ${token}`;
}
