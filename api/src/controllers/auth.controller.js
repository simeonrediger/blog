import { matchedData } from 'express-validator';

import * as authService from '../services/auth.service.js';
import * as userService from '../services/user.service.js';

export async function logIn(req, res) {
  const data = matchedData(req, { locations: ['body'] });
  const user = await userService.validateCredentials(data);

  if (!user) {
    return res.status(401).json({ error: 'Incorrect username or password' });
  }

  const token = authService.createToken(user);
  res.json({ user, token });
}
