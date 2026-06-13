import { Router } from "express";
import * as authController from "./auth.controller";

const authRoutes = Router();

authRoutes.post("/signup", authController.SignUp);

export default authRoutes;
