import { getDb } from '../utils/database.mjs';

class Dealership {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  async save() {
    const db = getDb();
    try {
      const result = await db.collection('dealerships').insertOne(this);
      return result;
    } catch (error) {
      throw new Error('Error saving dealership');
    }
  }

  static async findAll() {
    const db = getDb();
    try {
      const dealerships = await db.collection('dealerships').find().toArray();
      return dealerships;
    } catch (error) {
      throw new Error('Error fetching dealerships');
    }
  }
}

export default Dealership;
