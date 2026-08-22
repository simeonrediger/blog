import { Router } from 'express';

import * as authorization from '../middleware/authorization.middleware.js';
import * as userValidation from '../validators/user.validation.js';
import * as userController from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.post(
  '/',
  userValidation.validateCreate,
  authorization.requireAdmin,
  userController.register,
);

export default userRouter;
