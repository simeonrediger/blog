import { matchedData } from 'express-validator';

import * as errorController from '../controllers/error.controller.js';
import * as postRepository from '../repositories/post.repository.js';

export function requirePostExists(idParamName = 'id') {
  return async (req, res, next) => {
    const { [idParamName]: id } = matchedData(req, { locations: ['params'] });
    const post = await postRepository.findById(id);

    if (!post) {
      return errorController.handleNotFound(req, res);
    }

    req.post = post;
    next();
  };
}
