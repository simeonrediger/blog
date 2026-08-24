import { Router } from 'express';

import commentRouter from './comment.router.js';
import * as auth from '../middleware/auth.middleware.js';
import * as authorization from '../middleware/authorization.middleware.js';
import * as postController from '../controllers/post.controller.js';
import * as postValidation from '../validators/post.validation.js';
import * as resource from '../middleware/resource.middleware.js';

const postRouter = Router();

postRouter.get('/', postController.getAll);

postRouter.get(
  '/:id',
  postValidation.validateId(),
  resource.requirePostExists(),
  postController.getById,
);

postRouter.use(
  '/:postId/comments',
  postValidation.validateId('postId'),
  resource.requirePostExists('postId'),
  commentRouter,
);

postRouter.use(auth.requireAuth, authorization.requireRole('admin'));
postRouter.post('/', postValidation.validateCreate, postController.create);

postRouter
  .route('/:id')
  .all(
    postValidation.validateId(),
    resource.requirePostExists(),
    authorization.requireOwner(req => req.post.authorId),
  )
  .put(postValidation.validateUpdate, postController.updateById)
  .delete(postController.deleteById);

export default postRouter;
