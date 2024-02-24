// dealController.js
import Deal from '../models/Deal.mjs';

export const getAllDeals = async (req, res) => {
  try {
    const deals = await Deal.find();
    res.json(deals);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getDealsByDealershipId = async (req, res) => {
  try {
    const deals = await Deal.find({ dealershipId: req.params.dealershipId });
    res.json(deals);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getDealsByCarId = async (req, res) => {
  try {
    const deals = await Deal.find({ carId: req.params.carId });
    res.json(deals);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const addDeal = async (req, res) => {
  try {
    const { carId, dealershipId, price, date } = req.body;
    
    // Create a new deal instance
    const newDeal = new Deal({ carId, dealershipId, price, date });
    
    // Save the new deal to the database
    await newDeal.save();
    
    res.status(201).json({ message: 'Deal added successfully', deal: newDeal });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
