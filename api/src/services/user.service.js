import bcrypt from 'bcryptjs';

import * as userRepository from '../repositories/user.repository.js';

export async function register({ username, password }) {
  const passwordHash = await bcrypt.hash(password, 10);
  return await userRepository.create({ username, passwordHash });
}
