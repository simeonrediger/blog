import { Router } from 'express';

import * as authorization from '../middleware/authorization.middleware.js';
import * as userController from '../controllers/user.controller.js';
import * as userValidation from '../validators/user.validation.js';

const userRouter = Router();

userRouter.post(
  '/',
  userValidation.validateCreate,
  authorization.requireAdminPassword,
  userController.register,
);

export default userRouter;
