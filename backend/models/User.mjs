import { getDb } from '../utils/database.mjs';

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  async save() {
    const db = getDb();
    try {
      const result = await db.collection('users').insertOne(this);
      return result;
    } catch (error) {
      throw new Error('Error saving user');
    }
  }

  static async findByUsername(username) {
    const db = getDb();
    try {
      const user = await db.collection('users').findOne({ username });
      return user;
    } catch (error) {
      throw new Error('Error fetching user');
    }
  }

  static async findByEmail(email) {
    const db = getDb();
    try {
      const user = await db.collection('users').findOne({ email });
      return user;
    } catch (error) {
      throw new Error('Error fetching user');
    }
  }
}

export default User;

