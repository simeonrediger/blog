import express from 'express';

const app = express();

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ error: 'Server error' });
});

export default app;
