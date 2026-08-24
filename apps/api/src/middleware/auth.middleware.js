import jwt from 'jsonwebtoken';
import { matchedData } from 'express-validator';

import * as errorController from '../controllers/error.controller.js';
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
    req.authError = { status: 400, message: 'Missing Authorization header' };
    return next();
  }

  if (typeof authorizationHeader !== 'string') {
    req.authError = { status: 400, message: 'Malformed Authorization header' };
    return next();
  }

  const authorizationHeaderParts = authorizationHeader.split(' ');
  const [scheme, token] = authorizationHeaderParts;

  if (authorizationHeaderParts.length !== 2 || scheme !== 'Bearer' || !token) {
    req.authError = { status: 400, message: 'Malformed Authorization header' };
    return next();
  }

  let userId, role;

  try {
    ({ sub: userId, role } = jwt.verify(token, process.env.JWT_SECRET));
  } catch {
    return next();
  }

  if (!Number.isInteger(userId)) {
    return next();
  }

  const user = await userRepository.findById(userId);

  if (!user) {
    return next();
  }

  user.role = role;
  req.user = user;
  next();
}

export async function requireAuth(req, res, next) {
  if (!req.user) {
    if (req.authError?.status && req.authError.status !== 401) {
      res.status(req.authError.status).json({ error: req.authError.message });
    } else {
      errorController.handleUnauthenticated(req, res);
    }

    return;
  }

  next();
}
