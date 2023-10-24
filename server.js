// Backend

// server.js

const express = require('express');
const mongoose = require('mongoose');

const Seat = require('./models/Seat');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/book-my-seat', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define routes
app.get('/seats', async (req, res) => {
  const seats = await Seat.find();
  res.json(seats);
});

app.post('/seats', async (req, res) => {
  const seat = new Seat(req.body);
  await seat.save();
  res.json(seat);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// models/Seat.js

const mongoose = require('mongoose');

const SeatSchema = new mongoose.Schema({
  id: String,
  status: String, // available/booked
  type: String, // economy/business/first class
});

const Seat = mongoose.model('Seat', SeatSchema);

module.exports = Seat;
