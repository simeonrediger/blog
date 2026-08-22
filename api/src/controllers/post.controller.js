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
