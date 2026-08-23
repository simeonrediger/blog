import { Router } from 'express';

import * as auth from '../middleware/auth.middleware.js';
import * as authorization from '../middleware/authorization.middleware.js';
import * as postController from '../controllers/post.controller.js';
import * as postValidation from '../validators/post.validation.js';
import * as resource from '../middleware/resource.middleware.js';

const postRouter = Router();

postRouter.use(auth.authenticate, authorization.requireRole('admin'));
postRouter.post('/', postValidation.validateCreate, postController.create);

postRouter
  .route('/:id')
  .all(
    postValidation.validateId(),
    resource.requirePostExists(),
    authorization.requireOwner(req => req.post.authorId),
  )
  .put(postValidation.validateUpdate, postController.update)
  .delete(postController.destroy);

export default postRouter;
