const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Database connected successfully.');
  } catch (err) {
    console.error('Database connection error:', err.message);
    process.exit(1); // Exit with failure
  }
};

module.exports = dbConnect;
