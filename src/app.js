import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';

const app = express();
const port = 8000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// ✅ Pass `db` directly to routes if needed
app.use('/api/users', userRoutes);

// ✅ Test root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the E-Commerce API!');
});

// ✅ Start the server
app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});
