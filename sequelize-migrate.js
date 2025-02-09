import { Sequelize } from 'sequelize';
import { readdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const sequelize = new Sequelize({
  dialect: 'mysql', // Change to your DB dialect (mysql, postgres, sqlite)
  host: 'localhost',
  username: 'root',
  password: 'root',
  database: 'ecommerce',
});

async function migrate() {
  const migrationFiles = await readdir(path.join(__dirname, 'migrations'));

  for (const file of migrationFiles) {
    if (file.endsWith('.js')) {
      const migration = await import(
        `file://${path.join(__dirname, 'migrations', file)}`
      );
      await migration.default.up(sequelize.getQueryInterface(), Sequelize);
    }
  }
  console.log('Migrations executed successfully!');
}

migrate().catch((err) => {
  console.error('Migration error:', err);
  process.exit(1);
});
