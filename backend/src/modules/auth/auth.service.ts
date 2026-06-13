import { hashPassword } from "../../shared/utils/password.util";
import * as authRepository from "./auth.repository";
import { SignupData } from "./auth.types";

export const signUp = async (userData: SignupData) => {
  const existingUser = await authRepository.findUserByEmail(userData.email);

  if (existingUser) {
    throw new Error("Email already registered");
  }

  const hashedPassword = await hashPassword(userData.password);

  return authRepository.createUser({
    ...userData,
    password: hashedPassword,
  });
};
