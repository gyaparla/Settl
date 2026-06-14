import { Request, Response } from "express";
import * as authService from "./auth.service";
import { loginSchema, signUpSchema } from "./auth.schema";
import { ZodError } from "zod";

export const createUserHandler = async (req: Request, res: Response) => {
  try {
    const validatedData = signUpSchema.parse(req.body);

    const newUser = await authService.createUser(validatedData);

    return res.status(201).json({
      success: true,
      message: "Account created successfully please login",
      data: newUser,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        success: false,
        message: error.issues[0]?.message,
        // TODO : Handle all errors (validation errors and etc..,) or add error handling middleware
      });
    }
    if (
      error instanceof Error &&
      error.message === "Email already registered"
    ) {
      return res.status(409).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const loginUserHandler = async (req: Request, res: Response) => {
  try {
    const validData = loginSchema.parse(req.body);

    const user = await authService.loginUser(validData);

    return res.status(200).json({
      success: true,
      message: "User verified successfully",
      data: user,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        success: false,
        message: error.issues[0]?.message,
      });
    }

    if (
      error instanceof Error &&
      error.message === "Invalid email or password"
    ) {
      return res.status(401).json({
        success: false,
        message: error.message,
      });
    }
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
