const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/appointment-system')
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Doctor model
const Doctor = mongoose.model('Doctor', {
  name: String,
  specialty: String,
});

// Appointment model
const Appointment = mongoose.model('Appointment', {
  doctorId: String,
  patientName: String,
  date: String,
});

// Serve static files (HTML, CSS, JS) from current directory
app.use(express.static(__dirname));

// Routes
app.get('/doctors', async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
});

app.get('/appointments', async (req, res) => {
  const appointments = await Appointment.find();
  res.json(appointments);
});

app.post('/book', async (req, res) => {
  const { doctorId, patientName, date } = req.body;
  const appointment = new Appointment({ doctorId, patientName, date });
  await appointment.save();
  res.send('Appointment booked successfully!');
});

app.delete('/cancel/:id', async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id);
  res.send('Appointment canceled.');
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
