// This middleware verifies if the user making the request is authenticated as admin, user or dealership
export const verifyRole = (req, res, next) => {
    const { role } = req.user; // Assuming user role is stored in the req.user object after authentication
    if (role === 'admin' || role === 'user' || role === 'dealership') {
      next(); // User is authorized, proceed to the next middleware
    } else {
      res.status(403).json({ message: 'Forbidden' }); // User is not authorized
    }
  };
  