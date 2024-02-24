import { getDb } from '../utils/database.mjs';

class Deal {
  constructor(carId, dealershipId) {
    this.carId = carId;
    this.dealershipId = dealershipId;
  }

  async save() {
    const db = getDb();
    try {
      const result = await db.collection('deals').insertOne(this);
      return result;
    } catch (error) {
      throw new Error('Error saving deal');
    }
  }

  static async findByCarId(carId) {
    const db = getDb();
    try {
      const deals = await db.collection('deals').find({ carId }).toArray();
      return deals;
    } catch (error) {
      throw new Error('Error fetching deals');
    }
  }
}

export default Deal;
