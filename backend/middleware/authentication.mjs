// middleware/authentication.mjs

import jwt from 'jsonwebtoken';
import config from '../config.mjs';

export function generateToken(user) {
  return jwt.sign({ userId: user._id, role: user.role }, config.jwtSecret, { expiresIn: '1h' });
}

export function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.userId = decoded.userId;
    req.userRole = decoded.role; // Store user role in request for further authorization checks
    next();
  });
}
