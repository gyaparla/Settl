import { Router } from "express";
import * as authController from "./auth.controller";

const authRoutes = Router();

authRoutes.post("/signup", authController.createUserHandler);

authRoutes.post("/login", authController.loginUserHandler);

export default authRoutes;
