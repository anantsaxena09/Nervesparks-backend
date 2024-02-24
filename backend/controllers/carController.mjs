// carController.mjs
import Car from '../models/Car.mjs';

export const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getCarsInDealership = async (req, res) => {
  try {
    const cars = await Car.find({ dealershipId: req.params.dealershipId });
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const addNewCar = async (req, res) => {
  try {
    const { make, model, year, color, dealershipId } = req.body;
    
    // Create a new car instance
    const newCar = new Car({ make, model, year, color, dealershipId });
    
    // Save the new car to the database
    await newCar.save();
    
    res.status(201).json({ message: 'Car added successfully', car: newCar });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
