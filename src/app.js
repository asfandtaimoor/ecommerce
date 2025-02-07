import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';

const app = express();
const port = 8000;

// Connect to MySQL
// const db = connectDB();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the E-Commerce API!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
