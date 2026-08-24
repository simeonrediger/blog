import express from 'express';

import authRouter from './routes/auth.router.js';
import commentRouter from './routes/comment.router.js';
import postRouter from './routes/post.router.js';
import userRouter from './routes/user.router.js';
import * as auth from './middleware/auth.middleware.js';
import * as errorController from './controllers/error.controller.js';

const app = express();

app.use(express.json());
app.use(errorController.handleInvalidJson);

app.use(auth.authenticate);

app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/comments', commentRouter);
app.use('/tokens', authRouter);

app.use(errorController.handleNotFound);
app.use(errorController.handleUnexpected);

export default app;
