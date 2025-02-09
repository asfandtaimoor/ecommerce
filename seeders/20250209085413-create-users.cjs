'use strict';
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing

module.exports = {
  async up(queryInterface, Sequelize) {
    // Seed user data
    const users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        password: await bcrypt.hash('password123', 10), // Hash password
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'janesmith@example.com',
        password: await bcrypt.hash('securepass', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Insert data into Users table
    await queryInterface.bulkInsert('Users', users, {});
  },

  async down(queryInterface, Sequelize) {
    // Remove all seeded users
    await queryInterface.bulkDelete('Users', null, {});
  },
};
