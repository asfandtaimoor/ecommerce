import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = () => {
  const db = mysql.createConnection({
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'root',
    database: process.env.MYSQL_DATABASE || 'ecommerce',
    port: process.env.MYSQL_PORT || 3306, // Default MySQL port, change if necessary
  });

  db.connect((err) => {
    if (err) {
      console.error('Failed to connect to MySQL', err);
      process.exit(1);
    } else {
      console.log('Connected to MySQL');
    }
  });

  return db;
};

export default connectDB;
