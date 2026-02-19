require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');

const seedUsers = [
  {
    email: 'admin@example.com',
    password: 'password123',
  },
  {
    email: 'user@example.com',
    password: 'user123456',
  },
];

const runSeeder = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected for seeding');

    for (const userData of seedUsers) {
      const exists = await User.findOne({ email: userData.email });
      if (exists) {
        console.log(`User ${userData.email} already exists, skipping`);
        continue;
      }
      const user = new User(userData);
      await user.save();
      console.log(`Created user: ${userData.email}`);
    }

    console.log('Seeder completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Seeder error:', error);
    process.exit(1);
  }
};

runSeeder();
