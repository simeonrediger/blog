import { Router } from 'express';

import * as auth from '../middleware/auth.middleware.js';
import * as authorization from '../middleware/authorization.middleware.js';
import * as commentController from '../controllers/comment.controller.js';
import * as commentValidation from '../validators/comment.validation.js';
import * as resource from '../middleware/resource.middleware.js';

const commentRouter = Router();

commentRouter.post(
  '/',
  commentValidation.validateCreate,
  commentController.create,
);

commentRouter.use(auth.authenticate, authorization.requireRole('admin'));

commentRouter
  .route('/:id')
  .all(commentValidation.validateId, resource.requireCommentExists())
  .put(commentValidation.validateUpdate, commentController.update)
  .delete(commentController.destroy);

export default commentRouter;
