import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

// Create a connection pool for better performance
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || '127.0.0.1', // Use 'mysql-docker-container' if running inside Docker
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'root',
  database: process.env.MYSQL_DATABASE || 'ecommerce',
  port: process.env.MYSQL_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10, // Adjust based on your app's needs
  queueLimit: 0,
});

// Test the connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('❌ MySQL Connection Failed:', err.message);
    process.exit(1); // Exit on failure
  }
  console.log('✅ Connected to MySQL');
  connection.release(); // Release the connection back to the pool
});

export default pool;
