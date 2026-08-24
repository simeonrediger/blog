import prisma from '../db/prisma.js';

export async function findById(id) {
  return await prisma.comment.findUnique({ where: { id } });
}

export async function create({ authorName, content, postId }) {
  return await prisma.comment.create({ data: { authorName, content, postId } });
}

export async function updateById(id, { authorName, content }) {
  let editedAt;

  if (authorName !== undefined || content !== undefined) {
    editedAt = new Date();
  }

  return await prisma.comment.update({
    where: { id },
    data: { authorName, content, editedAt },
  });
}

export async function deleteById(id) {
  return await prisma.comment.delete({ where: { id } });
}
