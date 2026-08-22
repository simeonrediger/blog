import prisma from '../db/prisma.js';

export async function create({ username, passwordHash }) {
  return await prisma.user.create({ data: { username, passwordHash } });
}

export async function findByUsername(
  username,
  { omitPasswordHash = true } = {},
) {
  return await prisma.user.findFirst({
    where: { username: { equals: username, mode: 'insensitive' } },
    omit: { passwordHash: omitPasswordHash },
  });
}

export async function usernameIsAvailable(username) {
  const existingUser = await findByUsername(username);
  return !existingUser;
}

export async function findById(id) {
  return await prisma.user.findUnique({ where: { id } });
}
