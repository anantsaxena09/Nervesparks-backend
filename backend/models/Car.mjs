import { getDb } from '../utils/database.mjs';

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  async save() {
    const db = getDb();
    try {
      const result = await db.collection('cars').insertOne(this);
      return result;
    } catch (error) {
      throw new Error('Error saving car');
    }
  }

  static async findAll() {
    const db = getDb();
    try {
      const cars = await db.collection('cars').find().toArray();
      return cars;
    } catch (error) {
      throw new Error('Error fetching cars');
    }
  }
}

export default Car;
