import express from 'express';

const app = express();

app.use((req, res) => {
  res.status(404).json({ error: 'Resource not found' });
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ error: 'Server error' });
});

export default app;
