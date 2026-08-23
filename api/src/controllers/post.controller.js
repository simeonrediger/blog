import { matchedData } from 'express-validator';

import * as postRepository from '../repositories/post.repository.js';
import { getErrorMessages } from '../validators/validation-utils.js';

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

export async function update(req, res) {
  const errors = getErrorMessages(req);

  if (errors) {
    return res.status(400).json({ errors });
  }

  const { id } = matchedData(req, { locations: ['params'] });
  const data = matchedData(req, { locations: ['body'] });
  data.id = id;
  const post = await postRepository.update(data);
  res.status(200).json({ post });
}

export async function destroy(req, res) {
  const errors = getErrorMessages(req);

  if (errors) {
    return res.status(400).json({ errors });
  }

  const data = matchedData(req, { locations: ['params'] });
  await postRepository.destroy(data);
  res.sendStatus(204);
}
