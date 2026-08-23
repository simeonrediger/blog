export function handleInvalidJson(error, req, res, next) {
  if (error.type === 'entity.parse.failed') {
    res.status(400).json({ error: 'Invalid JSON' });
  }
}

export function handleNotFound(req, res) {
  res.status(404).json({ error: 'Resource not found' });
}

export function handleUnexpected(error, req, res, next) {
  console.error(error);
  res.status(500).json({ error: 'Server error' });
}
