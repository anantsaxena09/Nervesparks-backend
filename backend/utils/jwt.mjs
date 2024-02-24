// jwt.js

const jwt = require('jsonwebtoken');
import { secretKey } from '../config.mjs'; // Assuming the location of your config.js file

export const generateToken = (payload) => {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    throw new Error('Invalid token');
  }
};
