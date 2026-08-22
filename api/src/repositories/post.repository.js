import prisma from '../db/prisma.js';

export async function create({ title, content, authorId }) {
  return await prisma.post.create({
    data: { title, content, authorId },
    include: {
      authorId: false,
      author: { include: { passwordHash: false } },
    },
  });
}
