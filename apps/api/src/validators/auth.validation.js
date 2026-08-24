import { body } from 'express-validator';

export const validateLogin = [body('username'), body('password')];
