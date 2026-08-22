export function matchesAdminPassword(password) {
  return password === process.env.ADMIN_SECRET;
}
