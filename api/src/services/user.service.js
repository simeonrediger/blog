import bcrypt from 'bcryptjs';

import * as userRepository from '../repositories/user.repository.js';

export async function register({ username, password }) {
  const passwordHash = await bcrypt.hash(password, 10);
  return await userRepository.create({ username, passwordHash });
}

export async function validateCredentials({ username, password }) {
  const user = await userRepository.findByUsername(username, {
    omitPasswordHash: false,
  });

  if (!user) {
    return null;
  }

  const passwordMatches = await bcrypt.compare(password, user.passwordHash);

  if (!passwordMatches) {
    return null;
  }

  return user;
}
