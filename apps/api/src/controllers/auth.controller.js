import * as authService from '../services/auth.service.js';

export async function logIn(req, res) {
  const { user } = req;
  const role = 'admin';
  const token = authService.createToken(user.id, role);
  res.json({ user, token });
}
