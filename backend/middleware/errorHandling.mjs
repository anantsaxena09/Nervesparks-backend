// This middleware handles errors globally
export const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack
    res.status(500).json({ message: 'Internal Server Error' }); // Send generic error response
  };
  