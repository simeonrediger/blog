export function handleInvalidJson(error, req, res, next) {
  if (error.type === 'entity.parse.failed') {
    res.status(400).json({ error: 'Invalid JSON' });
  }
}

export function handleUnauthenticated(req, res) {
  res.status(401).json({ error: 'Authentication required' });
}

export function handleForbidden(req, res) {
  res.status(403).json({ error: 'Forbidden' });
}

export function handleNotFound(req, res) {
  res.status(404).json({ error: 'Resource not found' });
}

export function handleMethodNotAllowed(req, res) {
  res.status(405).json({ error: 'Method not allowed' });
}

export function handleUnexpected(error, req, res, next) {
  console.error(error);
  res.status(500).json({ error: 'Server error' });
}
