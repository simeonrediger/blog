import { param, body } from 'express-validator';

import * as postRepository from '../repositories/post.repository.js';

const requirements = {
  title: { maxLength: 60 },
  content: { maxLength: 20_000 },
};

export const validateCreate = [validateTitle(), validateContent()];
export const validateExists = [validateId()];
export const validateUpdate = [validateTitle(), validateContent()];

function validateId(key = 'id') {
  return param(key)
    .isInt()
    .withMessage('Post ID must be an integer')
    .toInt()
    .custom(idExists);
}

function validateTitle() {
  return body('title')
    .trim()
    .notEmpty()
    .withMessage('Title must not be empty')
    .isLength({ max: requirements.title.maxLength })
    .withMessage(
      `Title must not exceed ${requirements.title.maxLength} characters`,
    );
}

function validateContent() {
  return body('content')
    .trim()
    .notEmpty()
    .withMessage('Content must not be empty')
    .isLength({ max: requirements.content.maxLength })
    .withMessage(
      `Content must not exceed ${requirements.content.maxLength} characters`,
    );
}

async function idExists(id, { req }) {
  const post = await postRepository.findById(id);

  if (!post) {
    throw new Error(`Post ID '${id}' does not exist`);
  }

  req.post = post;
  return true;
}
