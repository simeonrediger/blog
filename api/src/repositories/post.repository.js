import prisma from '../db/prisma.js';

export async function findById(id) {
  return await prisma.post.findUnique({
    where: { id },
    include: { comments: { include: { postId: false } } },
  });
}

export async function findAll() {
  return await prisma.post.findMany({
    include: { authorId: false, author: true },
  });
}

export async function create({ title, content, authorId }) {
  return await prisma.post.create({
    data: { title, content, authorId },
    include: { authorId: false, author: true },
  });
}

export async function updateById(id, { title, content }) {
  return await prisma.post.update({ where: { id }, data: { title, content } });
}

export async function deleteById(id) {
  return await prisma.post.delete({ where: { id } });
}
