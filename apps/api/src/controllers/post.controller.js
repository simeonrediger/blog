import { matchedData } from 'express-validator';

import * as postRepository from '../repositories/post.repository.js';
import { getErrorMessages } from '../validators/validation-utils.js';

export async function getAll(req, res) {
  const isAdmin = req.user?.role === 'admin';

  const posts = await (isAdmin
    ? postRepository.findAll()
    : postRepository.findAllPublished());

  res.json({ posts });
}

export async function getById(req, res) {
  const { id } = matchedData(req, { locations: ['params'] });
  const post = await postRepository.findById(id);
  res.json({ post });
}

export async function create(req, res) {
  const errors = getErrorMessages(req);

  if (errors) {
    return res.status(400).json({ errors });
  }

  const data = matchedData(req, { locations: ['body'] });
  data.authorId = req.user.id;
  const post = await postRepository.create(data);
  res.status(201).json({ post });
}

export async function updateById(req, res) {
  const errors = getErrorMessages(req);

  if (errors) {
    return res.status(400).json({ errors });
  }

  const { id } = matchedData(req, { locations: ['params'] });
  const data = matchedData(req, { locations: ['body'] });
  const post = await postRepository.updateById(id, data);
  res.status(200).json({ post });
}

export async function deleteById(req, res) {
  const errors = getErrorMessages(req);

  if (errors) {
    return res.status(400).json({ errors });
  }

  const { id } = matchedData(req, { locations: ['params'] });
  await postRepository.deleteById(id);
  res.sendStatus(204);
}
