import pool from "../../config/db.config";
import { SignupData } from "./auth.types";

export const findUserByEmail = async (email: string) => {
  const query = `SELECT * FROM users WHERE email= $1`;

  const result = await pool.query(query, [email]);

  return result.rows[0] || null;
};

export const createUser = async (user: SignupData) => {
  const query = `INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING id, name, email, created_at`;

  const values = [user.name, user.email, user.password];

  const result = await pool.query(query, values);

  return result.rows[0];
};
