import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Please enter a valid email").trim().toLowerCase(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(50, "Password is too long")
    .regex(/[A-Z]/, "Must contain atleast one uppercase letter")
    .regex(/[a-z]/, "Must contain atleast one lowercase letter")
    .regex(/[0-9]/, "Must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Must contain at least one special characyer"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
