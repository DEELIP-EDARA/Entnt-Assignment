const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Import the company routes
const companyRoutes = require('./routes/companyroutes');
app.use('/api/companies', companyRoutes);

const mongoose = require('mongoose'); // Add this line to import Mongoose


// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/communication_tracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
});

// Example routes (use your own routes if necessary)
app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
});