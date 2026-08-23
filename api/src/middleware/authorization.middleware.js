import { matchedData } from 'express-validator';

import * as authorizationService from '../services/authorization.service.js';

export function requireAdminPassword(req, res, next) {
  const { adminPassword } = matchedData(req, { locations: ['body'] });
  const passwordMatches =
    authorizationService.matchesAdminPassword(adminPassword);

  if (!passwordMatches) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  req.role = 'admin';
  next();
}

export function requireRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    next();
  };
}

export function requireOwner(getOwnerId) {
  return (req, res, next) => {
    if (req.user.id !== getOwnerId(req)) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    next();
  };
}
