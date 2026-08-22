import { Router } from 'express';

import * as userValidation from '../validators/user.validation.js';
import * as userController from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.post('/', userValidation.validateCreate, userController.register);

export default userRouter;
