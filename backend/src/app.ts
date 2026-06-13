import express, { Application, Request, Response } from "express";
import routes from "./routes/router";
import cors from "cors";
import corsOptions from "./config/cors.config";

const app: Application = express();

// Middlewares
app.use(express.json());
app.use(cors(corsOptions));

// Health end point
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    message: "Server is ready",
  });
});

// Routes
app.use("/api", routes);

export default app;
