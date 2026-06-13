import app from "./app";
import pool from "./config/db.config";
import { env } from "./config/env.config";

const PORT = env.PORT;

const startServer = async () => {
  try {
    const result = await pool.query("SELECT NOW()");

    console.log("Database Connected");
    console.log(result.rows[0]);

    app.listen(PORT, () => {
      console.log(`Backend Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("Database connection Failed:", error);
    process.exit(1);
  }
};

startServer();
// Error handling middleware
