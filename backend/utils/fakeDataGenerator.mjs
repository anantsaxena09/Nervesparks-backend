// // utils/fakeDataGenerator.js
// Import the Car model

// Import the necessary models and controllers
// Import necessary modules
import { connectToDatabase } from './database.mjs';
import Car from '../models/Car.mjs';
import Dealership from '../models/Dealership.mjs';
import Deal from '../models/Deal.mjs';
import faker from 'faker';

// Function to generate and add a new car and dealership deal
const addNewCarAndDeal = async () => {
  try {
    // Connect to the database
    await connectToDatabase();

    // Generate fake data for car
    const newCar = new Car(
      faker.vehicle.manufacturer(), // Random car make
      faker.vehicle.model(), // Random car model
      faker.random.number({ min: 1990, max: 2022 }) // Random car year between 1990 and 2022
    );

    // Save the new car to the database
    await newCar.save();

    console.log('New car added successfully:', newCar);

    // Generate fake data for dealership
    const newDealership = new Dealership(
      faker.company.companyName(), // Random company name
      faker.address.city() // Random city
    );

    // Save the new dealership to the database
    await newDealership.save();

    console.log('New dealership added successfully:', newDealership);

    // Create a new deal instance
    const newDeal = new Deal(newCar._id, newDealership._id, newCar.price, new Date());

    // Save the new deal to the database
    await newDeal.save();

    console.log('New deal added successfully:', newDeal);
  } catch (error) {
    console.error('Error adding new car and dealership deal:', error);
  }
};

// Call the function to add a new car and dealership deal
addNewCarAndDeal();





// import { connectToDatabase } from './database.mjs';
// import Car from '../models/Car.mjs';

// // Function to generate and add a new car
// const addNewCar = async () => {
//   try {
//     // Connect to the database
//     await connectToDatabase();

//     // Create a new car instance
//     const newCar = new Car('Toyota', 'Corolla', 2022);

//     // Save the new car to the database
//     await newCar.save();

//     console.log('New car added successfully:', newCar);
//   } catch (error) {
//     console.error('Error adding new car:', error);
//   }
// };

// // Call the function to add a new car
// addNewCar();



// import faker from 'faker';
// import Car from '../models/Car.mjs';
// import Dealership from '../models/Dealership.mjs';
// import Deal from '../models/Deal.mjs';

// // Function to generate dummy cars
// const generateCars = async (numCars) => {
//   try {
//     const cars = [];
//     for (let i = 0; i < numCars; i++) {
//       const car = new Car({
//         make: faker.vehicle.manufacturer(),
//         model: faker.vehicle.model(),
//         year: faker.vehicle.year(),
//         color: faker.commerce.color(),
//         price: faker.datatype.number({ min: 1000, max: 100000 }),
//       });
//       await car.save();
//       cars.push(car);
//     }
//     return cars;
//   } catch (error) {
//     console.error('Error generating dummy cars:', error);
//   }
// };

// // Function to generate dummy dealerships
// const generateDealerships = async (numDealerships) => {
//   try {
//     const dealerships = [];
//     for (let i = 0; i < numDealerships; i++) {
//       const dealership = new Dealership({
//         name: faker.company.companyName(),
//         location: faker.address.city(),
//       });
//       await dealership.save();
//       dealerships.push(dealership);
//     }
//     return dealerships;
//   } catch (error) {
//     console.error('Error generating dummy dealerships:', error);
//   }
// };

// // Function to generate dummy deals
// const generateDeals = async (numDeals, cars, dealerships) => {
//   try {
//     const deals = [];
//     for (let i = 0; i < numDeals; i++) {
//       const car = faker.random.arrayElement(cars);
//       const dealership = faker.random.arrayElement(dealerships);
//       const deal = new Deal({
//         carId: car._id,
//         dealershipId: dealership._id,
//         price: car.price,
//         date: faker.date.past(),
//       });
//       await deal.save();
//       deals.push(deal);
//     }
//     return deals;
//   } catch (error) {
//     console.error('Error generating dummy deals:', error);
//   }
// };

// export { generateCars, generateDealerships, generateDeals };
