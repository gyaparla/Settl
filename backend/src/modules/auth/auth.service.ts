import { hashPassword, verifyPassword } from "../../shared/utils/password.util";
import * as authRepository from "./auth.repository";
import { LoginPayload, SignupPayload } from "./auth.schema";

export const createUser = async (userData: SignupPayload) => {
  const existingUser = await authRepository.findUserByEmail(userData.email);

  if (existingUser) {
    throw new Error("Email already registered");
  }

  const hashedPassword = await hashPassword(userData.password);

  return authRepository.insertUser({
    ...userData,
    password: hashedPassword,
  });
};

export const loginUser = async (credentials: LoginPayload) => {
  const user = await authRepository.findUserByEmail(credentials.email);

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isPasswordValid = await verifyPassword(
    user.password,
    credentials.password,
  );

  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  const { password, ...safeUser } = user;

  return safeUser;
};
