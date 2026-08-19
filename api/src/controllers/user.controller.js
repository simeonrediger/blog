import { matchedData } from 'express-validator';

import * as userService from '../services/user.service.js';
import * as authService from '../services/auth.service.js';
import { getErrorMessages } from '../validators/validation-utils.js';

export async function register(req, res) {
  const errors = getErrorMessages(req);

  if (errors) {
    return res.json({ errors });
  }

  const data = matchedData(req, { locations: ['body'] });
  const user = await userService.register(data);
  const token = await authService.authenticate(user);
  res.json({ user, token });
}
