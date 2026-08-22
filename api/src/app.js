import express from 'express';

import authRouter from './routes/auth.router.js';
import postRouter from './routes/post.router.js';
import userRouter from './routes/user.router.js';

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/tokens', authRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Resource not found' });
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ error: 'Server error' });
});

export default app;
