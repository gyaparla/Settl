import z from "zod";

export const signUpSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name must be atleast 3 characters")
    .max(50, "Name is too long")
    .regex(/^[A-Za-z\s.'-]+$/, "Name can contain only letters"),
  email: z.email("Please Enter a Valid Email").trim().toLowerCase(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(50, "Password is too long")
    .regex(/[A-Z]/, "Must contain at lest one uppercase letter")
    .regex(/[a-z]/, "Must contain at lest one lowecase letter")
    .regex(/[0-9]/, "Must contain at least on enumber")
    .regex(/[^A-Za-z0-9]/, "Must contain at least one special character"),
});

export type SignupPayload = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
  email: z.email("Please Enter a valid Email").trim().toLowerCase(),
  password: z.string().min(1, "Password is required"),
});

export type LoginPayload = z.infer<typeof loginSchema>;
