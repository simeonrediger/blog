import jwt from 'jsonwebtoken';
import { matchedData } from 'express-validator';

import * as userRepository from '../repositories/user.repository.js';
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

export async function authenticate(req, res, next) {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return res.status(400).json({ error: 'Missing Authorization header' });
  }

  if (typeof authorizationHeader !== 'string') {
    return res.status(400).json({ error: 'Malformed Authorization header' });
  }

  const authorizationHeaderParts = authorizationHeader.split(' ');
  const [scheme, token] = authorizationHeaderParts;

  if (authorizationHeaderParts.length !== 2 || scheme !== 'Bearer' || !token) {
    return res.status(400).json({ error: 'Malformed Authorization header' });
  }

  let userId, role;

  try {
    ({ sub: userId, role } = jwt.verify(token, process.env.JWT_SECRET));
  } catch {
    return res.status(401).json({ error: 'Authentication required' });
  }

  if (typeof userId !== 'number') {
    return res.status(401).json({ error: 'Authentication required' });
  }

  const user = await userRepository.findById(userId);

  if (!user) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  user.role = role;
  req.user = user;
  next();
}
