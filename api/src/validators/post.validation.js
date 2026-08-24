import { param, body } from 'express-validator';

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
  validatePublished(),
];

export const validateUpdate = [
  validateTitle(),
  validateContent(),
  validatePublished(),
];

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

function validatePublished() {
  return body('published')
    .optional()
    .isBoolean()
    .withMessage('Published must be a boolean');
}
