import pool from "../config/db.js";

export const findAdminByEmail = async (email) => {
  const result = await pool.query(
    "SELECT * FROM admins WHERE email = $1",
    [email]
  );

  return result.rows[0];
};

export const createAdmin = async (username, email, password) => {
  const result = await pool.query(
    `INSERT INTO admins(username, email, password)
     VALUES($1, $2, $3)
     RETURNING id, username, email, created_at`,
    [username, email, password]
  );

  return result.rows[0];
};