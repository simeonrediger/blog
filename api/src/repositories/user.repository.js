import prisma from '../db/prisma.js';

export async function create({ username, passwordHash }) {
  const user = await prisma.user.create({ data: { username, passwordHash } });
  delete user.passwordHash;
  return user;
}

export async function usernameIsAvailable(username) {
  const existingUser = await prisma.user.findFirst({
    where: { username: { equals: username, mode: 'insensitive' } },
  });

  return !existingUser;
}
