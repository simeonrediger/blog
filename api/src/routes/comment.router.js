import { Router } from 'express';

import * as commentController from '../controllers/comment.controller.js';
import * as commentValidation from '../validators/comment.validation.js';

const commentRouter = Router();

commentRouter.post(
  '/',
  commentValidation.validateCreate,
  commentController.create,
);

export default commentRouter;
