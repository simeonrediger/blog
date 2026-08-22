import { matchedData } from 'express-validator';
import * as userService from '../services/user.service.js';

export async function validateCredentials(req, res, next) {
  const data = matchedData(req, { locations: ['body'] });
  const user = await userService.validateCredentials(data);

  if (!user) {
    return res.status(401).json({ error: 'Incorrect username or password' });
  }

  req.user = user;
  next();
}
