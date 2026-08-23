import { Router } from 'express';

import * as auth from '../middleware/auth.middleware.js';
import * as authorization from '../middleware/authorization.middleware.js';
import * as postController from '../controllers/post.controller.js';
import * as postValidation from '../validators/post.validation.js';

const postRouter = Router();

postRouter.use(auth.authenticate, authorization.requireRole('admin'));
postRouter.post('/', postValidation.validateCreatePost, postController.create);

export default postRouter;
