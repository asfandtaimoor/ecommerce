import express from 'express';
import bodyParser from 'body-parser';
import db from './config/db.js';
import userRoutes from './routes/users.js';

const app = express();
const port = 8000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes(db));

app.get('/', (req, res) => {
  res.send('Welcome to the E-Commerce API!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
