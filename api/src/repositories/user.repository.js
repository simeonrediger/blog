import prisma from '../db/prisma.js';

export async function create({ username, passwordHash }) {
  const user = await prisma.user.create({ data: { username, passwordHash } });
  delete user.passwordHash;
  return user;
}

export async function findByUsername(username, { includePasswordHash } = {}) {
  const user = await prisma.user.findFirst({
    where: { username: { equals: username, mode: 'insensitive' } },
  });

  let passwordHash;

  if (user) {
    ({ passwordHash } = user);
    delete user.passwordHash;
  }

  return includePasswordHash ? { user, passwordHash } : user;
}

export async function usernameIsAvailable(username) {
  const existingUser = await findByUsername(username);
  return !existingUser;
}

export async function findById(id) {
  const user = await prisma.user.findUnique({ where: { id } });
  delete user.passwordHash;
  return user;
}
