import { matchedData } from 'express-validator';

import { getErrorMessages } from '../validators/validation-utils.js';

export async function register(req, res) {
  const errors = getErrorMessages(req);

  if (errors) {
    return res.json({ errors });
  }
}
