import express from 'express';

const router = express.Router();

// Delete a user
router.delete('/', (req, res) => {
  const db = req.app.get('db');
  res.json({ message: 'user base' });
});

// Delete a user
// router.delete('/:id', (req, res) => {
//   const db = req.app.get('db');
//   const userId = req.params.id;
//   db.query('DELETE FROM users WHERE id = ?', [userId], (err, results) => {
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     }
//     if (results.affectedRows === 0) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json({ message: 'User deleted successfully' });
//   });
// });

export default (db) => {
  router.use((req, res, next) => {
    req.app.set('db', db);
    next();
  });
  return router;
};
