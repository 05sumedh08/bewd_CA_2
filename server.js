const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.post('/signup', (req, res) => {
  const { username, email, password, dob } = req.body;
  if (!username) {
    return res.status(400).send('Username cannot be empty');
  }
  if (!email) {
    return res.status(400).send('Email cannot be empty');
  }
  if (password.length < 8 || password.length > 16) {
    return res.status(400).send('Password length must be greater than 8 or less than or equal to 16');
  }
  if (!dob) {
    return res.status(400).send('Date of Birth cannot be empty');
  }
  res.send('User account created successfully!');
});