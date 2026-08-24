import prisma from '../db/prisma.js';

export async function create({ authorName, content, postId }) {
  return await prisma.comment.create({ data: { authorName, content, postId } });
}
