// Import required modules
import express from 'express';
import { MongoClient } from 'mongodb';
const app = express();

// Import routes
import authRoutes from './routes/authRoutes.mjs';
import carRoutes from './routes/carRoutes.mjs';
import dealershipRoutes from './routes/dealershipRoutes.mjs';
import dealRoutes from './routes/dealRoutes.mjs';
import userRoutes from './routes/userRoutes.mjs';


// Middleware
app.use(express.json()); // Parse JSON bodies
app.use('/api/auth', authRoutes); // Routes for authentication
app.use('/api/cars', carRoutes); // Routes for cars
app.use('/api/dealerships', dealershipRoutes); // Routes for dealerships
app.use('/api/deals', dealRoutes); // Routes for deals
app.use('/api/users', userRoutes); // Routes for users

// Database connection
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect()
  .then(() => {
    console.log('Connected to MongoDB');
    const db = client.db('my_database');
    
    // Inject the MongoDB database instance into the request object
    app.use((req, res, next) => {
      req.db = db;
      next();
    });

    // Start server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Failed to connect to MongoDB:', error);
  });
