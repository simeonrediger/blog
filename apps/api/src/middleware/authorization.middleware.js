import { matchedData } from 'express-validator';

import * as authorizationService from '../services/authorization.service.js';
import * as errorController from '../controllers/error.controller.js';

export function requireAdminPassword(req, res, next) {
  const { adminPassword } = matchedData(req, { locations: ['body'] });
  const passwordMatches =
    authorizationService.matchesAdminPassword(adminPassword);

  if (!passwordMatches) {
    return errorController.handleForbidden(req, res);
  }

  req.role = 'admin';
  next();
}

export function requireRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return errorController.handleForbidden(req, res);
    }

    next();
  };
}

export function requireOwner(getOwnerId) {
  return (req, res, next) => {
    if (req.user.id !== getOwnerId(req)) {
      return errorController.handleForbidden(req, res);
    }

    next();
  };
}
