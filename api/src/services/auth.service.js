import jwt from 'jsonwebtoken';

export async function authenticate({ username }) {
  const DAY_IN_SEC = 60 * 60 * 24;

  return jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: 30 * DAY_IN_SEC,
  });
}
