import { matchedData } from 'express-validator';

import * as errorController from '../controllers/error.controller.js';
import * as postRepository from '../repositories/post.repository.js';

export function requirePostExists(idParamName) {
  return requireResourceExists('post', postRepository.findById, idParamName);
}

function requireResourceExists(
  resourceName,
  findResourceById,
  idParamName = 'id',
) {
  return async (req, res, next) => {
    const { [idParamName]: id } = matchedData(req, { locations: ['params'] });
    const resource = await findResourceById(id);

    if (!resource) {
      return errorController.handleNotFound(req, res);
    }

    req[resourceName] = resource;
    next();
  };
}
