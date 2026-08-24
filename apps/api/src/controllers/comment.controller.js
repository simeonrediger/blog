import { matchedData } from 'express-validator';

import * as commentRepository from '../repositories/comment.repository.js';
import { getErrorMessages } from '../validators/validation-utils.js';

export async function create(req, res) {
  const errors = getErrorMessages(req);

  if (errors) {
    return res.status(400).json({ errors });
  }

  const { postId } = matchedData(req, { locations: ['params'] });
  const data = matchedData(req, { locations: ['body'] });
  data.postId = postId;
  const comment = await commentRepository.create(data);
  res.status(201).json({ comment });
}

export async function updateById(req, res) {
  const errors = getErrorMessages(req);

  if (errors) {
    return res.status(400).json({ errors });
  }

  const { id } = matchedData(req, { locations: ['params'] });
  const data = matchedData(req, { locations: ['body'] });
  const comment = await commentRepository.updateById(id, data);
  res.status(200).json({ comment });
}

export async function deleteById(req, res) {
  const errors = getErrorMessages(req);

  if (errors) {
    return res.status(400).json({ errors });
  }

  const { id } = matchedData(req, { locations: ['params'] });
  await commentRepository.deleteById(id);
  res.sendStatus(204);
}
