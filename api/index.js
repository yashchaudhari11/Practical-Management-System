require('dotenv').config(); // Load .env file

const express = require('express');
const bodyParser = require('body-parser');
const dbConnect = require('../config/database'); // Import dbConnect from database.js
const userRoutes = require('../routes/userRoutes');
const practicalRoutes = require('../routes/practicalRoutes');
const subjectRoutes = require('../routes/subjectRoutes');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
dbConnect(); // Use the dbConnect function to establish the connection

// Register user routes
app.use('/users', userRoutes);
app.use('/subject', subjectRoutes);
app.use('/practical', practicalRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
