import { apiClient } from "../../../shared/services/api.client";
import type { LoginFormValues } from "../schemas/login.schema";
import type { SignupFormValues } from "../schemas/signup.schema";

export const registerUser = async (userData: SignupFormValues) => {
  const response = await apiClient.post("/auth/signup", userData);

  return response.data;
};

export const loginUser = async (credentials: LoginFormValues) => {
  const response = await apiClient.post("/auth/login", credentials);
  return response.data;
};
