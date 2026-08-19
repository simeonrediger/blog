import prisma from '../db/prisma.js';

export async function usernameIsAvailable(username) {
  const existingUser = await prisma.user.findFirst({
    where: { username: { equals: username, mode: 'insensitive' } },
  });

  return !existingUser;
}
