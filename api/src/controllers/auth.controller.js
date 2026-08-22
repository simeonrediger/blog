import * as authService from '../services/auth.service.js';

export async function logIn(req, res) {
  const { user } = req;
  const token = authService.createToken(user);
  res.json({ user, token });
}
