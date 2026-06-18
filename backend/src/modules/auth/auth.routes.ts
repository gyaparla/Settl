import { Router } from "express";
import * as authController from "./auth.controller";
import { authenticateUser } from "../../shared/middlewares/auth.middleware";

const authRoutes = Router();

authRoutes.post("/signup", authController.createUserHandler);

authRoutes.post("/login", authController.loginUserHandler);

authRoutes.get("/me", authenticateUser, authController.currentUserHandler);

export default authRoutes;
