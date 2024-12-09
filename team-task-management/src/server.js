const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;
const SECRET_KEY = 'your_secret_key';

app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'user' && password === 'password') {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

app.post('/api/signup', (req, res) => {
  const { username, password } = req.body;
  res.status(201).json({ message: 'Account created successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
