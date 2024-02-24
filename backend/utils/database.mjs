import { MongoClient } from 'mongodb';
const dbUrl = 'mongodb://localhost:27017';
const dbName = 'my_database'; 
let client;

export const connectToDatabase = async () => {
  try {
    client = new MongoClient(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log('Connected to database');
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
};

export const getDb = () => {
  if (!client) {
    throw new Error('Database not connected');
  }
  return client.db(dbName);
};
