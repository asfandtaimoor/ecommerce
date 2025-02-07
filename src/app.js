import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';

const app = express();
const port = 8000;

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'ecommerce',
  port: 8889, // Default MySQL port, change if necessary
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Routes

app.get('/', (req, res) => {
  res.send('Welcome to the E-Commerce API!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
