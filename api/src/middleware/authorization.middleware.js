import { matchedData } from 'express-validator';

import * as authorizationService from '../services/authorization.service.js';

export async function requireAdminPassword(req, res, next) {
  const { adminPassword } = matchedData(req, { locations: ['body'] });
  const passwordMatches =
    authorizationService.matchesAdminPassword(adminPassword);

  if (!passwordMatches) {
    return res.status(401).json({ error: 'Incorrect admin password' });
  }

  req.role = 'admin';
  next();
}
