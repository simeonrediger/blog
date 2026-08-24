import { param, body } from 'express-validator';

import { validateAtLeastOneOf } from './common.validation.js';

const requirements = {
  title: { maxLength: 60 },
  content: { maxLength: 20_000 },
};

export function validateId(idParamName = 'id') {
  return param(idParamName)
    .isInt()
    .withMessage('Post ID must be an integer')
    .toInt();
}

export const validateCreate = [
  validateTitle(),
  validateContent(),
  validatePublished().optional(),
];

export const validateUpdate = [
  validateTitle().optional(),
  validateContent().optional(),
  validatePublished().optional(),
  validateAtLeastOneOf(['title', 'content', 'published'], 'body'),
];

function validateTitle() {
  return body('title')
    .isString()
    .withMessage('Title must be a string')
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
    .isString()
    .withMessage('Content must be a string')
    .trim()
    .notEmpty()
    .withMessage('Content must not be empty')
    .isLength({ max: requirements.content.maxLength })
    .withMessage(
      `Content must not exceed ${requirements.content.maxLength} characters`,
    );
}

function validatePublished() {
  return body('published')
    .isBoolean()
    .withMessage('Published must be a boolean');
}
