import jwt from 'jsonwebtoken';

export function createToken(userId, role) {
  const payload = { sub: userId, role };

  if (!role) {
    delete payload.role;
  }

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '30d' });
}
