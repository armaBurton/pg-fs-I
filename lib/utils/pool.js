const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.PGSSLMODE && { rejectUnauthorized: false },
});

const PORT = process.env.PORT || 7890;

// eslint-disable-next-line no-console
pool.on("connect", () => console.log("🐘 Postgres connected"));

module.exports = pool;
