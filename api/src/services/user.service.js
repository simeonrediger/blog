import bcrypt from 'bcryptjs';

import * as userRepository from '../repositories/user.repository.js';

export async function register({ username, password }) {
  const passwordHash = await bcrypt.hash(password, 10);
  return await userRepository.create({ username, passwordHash });
}

export async function validateCredentials({ username, password }) {
  const { user, passwordHash } = await userRepository.findByUsername(username, {
    includePasswordHash: true,
  });

  if (!user) {
    return null;
  }

  const passwordMatches = await bcrypt.compare(password, passwordHash);

  if (!passwordMatches) {
    return null;
  }

  return user;
}
