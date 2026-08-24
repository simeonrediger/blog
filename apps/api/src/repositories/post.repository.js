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

export async function findAllPublished() {
  return await prisma.post.findMany({
    where: { published: true },
    include: { authorId: false, author: true },
  });
}

export async function create({ title, content, published, authorId }) {
  return await prisma.post.create({
    data: { title, content, published, authorId },
    include: { authorId: false, author: true },
  });
}

export async function updateById(id, { title, content, published }) {
  let editedAt;

  if (title !== undefined || content !== undefined) {
    editedAt = new Date();
  }

  return await prisma.post.update({
    where: { id },
    data: { title, content, published, editedAt },
  });
}

export async function deleteById(id) {
  return await prisma.post.delete({ where: { id } });
}
