import { Router } from 'express';

import authenticate from '../middleware/auth.middleware.js';
import * as authController from '../controllers/auth.controller.js';
import * as authValidation from '../validators/auth.validation.js';

const authRouter = Router();

authRouter.post(
  '/log-in',
  authValidation.validateLogin,
  authenticate,
  authController.logIn,
);

export default authRouter;
