const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
  termsAccepted: {
    type: Boolean,
    required: true,
  },
});

// Define the User model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
