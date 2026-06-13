import { CorsOptions } from "cors";
import { env } from "./env.config";

const allowedOrigins = env.FRONTEND_URL;

const corsOptions: CorsOptions = {
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
};

export default corsOptions;
