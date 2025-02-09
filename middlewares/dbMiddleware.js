import 'module-alias/register';
import db from '@config/db.js';

// Middleware to attach `db` to each request
const dbMiddleware = (req, res, next) => {
  req.db = db.promise(); // Attach MySQL promise connection to request
  next(); // Move to the next middleware or route
};

export default dbMiddleware;
