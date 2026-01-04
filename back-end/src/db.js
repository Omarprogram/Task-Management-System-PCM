//db.js

import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "task_manager",
  password:"123",
  port: 5432,
});

db.connect();

export default db;
