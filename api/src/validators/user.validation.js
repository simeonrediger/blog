import { body } from 'express-validator';

import * as userRepository from '../repositories/user.repository.js';

const requirements = {
  username: { minLength: 3, maxLength: 20 },
  password: { minLength: 12 },
};

export const validateCreate = [
  body('username')
    .trim()
    .isLength({
      min: requirements.username.minLength,
      max: requirements.username.maxLength,
    })
    .withMessage(
      `Username must be ${formatRange(requirements.username.minLength, requirements.username.maxLength)} characters`,
    )
    .bail()
    .custom(usernameIsAvailable),

  body('password')
    .isLength({ min: requirements.password.minLength })
    .withMessage(
      `Password must have at least ${requirements.password.minLength} characters`,
    ),

  body('passwordConfirmation').custom(matchesPassword),
];

function formatRange(min, max) {
  const EN_DASH = '\u2013';
  return `${min}${EN_DASH}${max}`;
}

async function usernameIsAvailable(username) {
  const usernameIsAvailable =
    await userRepository.usernameIsAvailable(username);

  if (!usernameIsAvailable) {
    throw new Error(`Username '${username}' already exists`);
  }

  return true;
}

function matchesPassword(passwordConfirmation, { req }) {
  if (passwordConfirmation !== req.body.password) {
    throw new Error('Passwords must match');
  }

  return true;
}
