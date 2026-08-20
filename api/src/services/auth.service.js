import jwt from 'jsonwebtoken';

export async function createToken(userId) {
  return jwt.sign({ sub: userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
}
