// dealershipController.js
import Dealership from '../models/Dealership.mjs';

export const getAllDealerships = async (req, res) => {
  try {
    const dealerships = await Dealership.find();
    res.json(dealerships);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getDealershipById = async (req, res) => {
  try {
    const dealership = await Dealership.findById(req.params.id);
    if (!dealership) {
      return res.status(404).json({ message: 'Dealership not found' });
    }
    res.json(dealership);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const addDealership = async (req, res) => {
  try {
    const { name, location } = req.body;
    
    // Create a new dealership instance
    const newDealership = new Dealership({ name, location });
    
    // Save the new dealership to the database
    await newDealership.save();
    
    res.status(201).json({ message: 'Dealership added successfully', dealership: newDealership });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
