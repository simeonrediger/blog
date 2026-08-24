import { body } from 'express-validator';

const requirements = {
  authorName: { maxLength: 20 },
  content: { maxLength: 1_000 },
};

export const validateCreate = [validateAuthorName(), validateContent()];

function validateAuthorName() {
  return body('authorName')
    .trim()
    .notEmpty()
    .withMessage('Author name must not be empty')
    .isString('Author name must be a string')
    .isLength({ max: requirements.authorName.maxLength })
    .withMessage(
      `Author name must not exceed ${requirements.authorName.maxLength} characters`,
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
