import express from 'express';
import db from '../config/db.js';

const router = express.Router();

// ✅ Get All Users
router.get('/', async (req, res) => {
  try {
    const [results] = await db.promise().query('SELECT * FROM Users');

    if (results.length === 0) {
      return res.status(404).json({ message: 'There are no Users' });
    }

    res.json(results);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ✅ Delete a user by ID
router.delete('/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const [results] = await db
      .promise()
      .query('DELETE FROM Users WHERE id = ?', [userId]);

    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error('Error deleting user:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
