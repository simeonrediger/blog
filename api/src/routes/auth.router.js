import { Router } from 'express';

import * as authValidation from '../validators/auth.validation.js';
import * as authController from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.post('/log-in', authValidation.validateLogin, authController.logIn);

export default authRouter;
