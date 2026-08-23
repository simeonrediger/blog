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

export async function findById(id) {
  return await prisma.post.findUnique({ where: { id } });
}

export async function update({ id, title, content }) {
  return await prisma.post.update({ where: { id }, data: { title, content } });
}
