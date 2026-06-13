import { is } from "./../../../node_modules/effect/src/Match";
import { Request, Response } from "express";
import * as authService from "./auth.service";
import { signUpSchema } from "./auth.schema";
import { ZodError } from "zod";

export const SignUp = async (req: Request, res: Response) => {
  try {
    const validatedData = signUpSchema.parse(req.body);

    const user = await authService.signUp(validatedData);

    return res.status(201).json({
      success: true,
      data: user,
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
