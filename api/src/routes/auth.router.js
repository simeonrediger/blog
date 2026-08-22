import { Router } from 'express';

import * as auth from '../middleware/auth.middleware.js';
import * as authController from '../controllers/auth.controller.js';
import * as authValidation from '../validators/auth.validation.js';

const authRouter = Router();

authRouter.post(
  '/',
  authValidation.validateLogin,
  auth.validateCredentials,
  authController.logIn,
);

export default authRouter;
