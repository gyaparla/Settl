import { FcGoogle } from "react-icons/fc";
import Button from "../../../shared/components/Button";
import { Input } from "../../../shared/components/Input";
import { Link, useNavigate } from "react-router-dom";
import { ROUTENAMES } from "../../../app/routes/routePaths";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormValues } from "../schemas/login.schema";
import FormField from "../../../shared/components/FormField";
import PasswordInput from "../../../shared/components/PasswordInput";
import { loginUser } from "../services/auth.service";
import { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const [serviceError, setServiceError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });

  const handleLogin = async (credentials: LoginFormValues) => {
    try {
      setServiceError("");
      const data = await loginUser(credentials);
      console.log("Authenticated User ==>", data);
      alert(data.message);
      navigate(ROUTENAMES.APP.DASHBOARD);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setServiceError(
          error.response?.data?.message ||
            error.message ||
            "Something went wrong",
        );
      }
    }
  };
  return (
    <div className="flex-1 grid place-items-center p-6">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
        <p className="mt-1.5 text-sm text-muted-foreground">
          log in to keep your balances in check
        </p>
        <div className="mt-8">
          <form onSubmit={handleSubmit(handleLogin)}>
            <Button
              type="button"
              variant="outline"
              className="w-full h-11 rounded-xl flex items-center justify-center gap-3"
            >
              <FcGoogle className="w-5 h-5" /> Continue with Google
            </Button>
            <div className="relative my-5">
              <span className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </span>
              <span className="relative flex justify-center text-xs uppercase tracking-wide">
                <span className="bg-background px-2 text-muted-foreground">
                  or
                </span>
              </span>
            </div>
            <FormField
              label="Email"
              htmlFor="email"
              error={errors.email?.message}
            >
              <Input
                id="email"
                type="email"
                placeholder="your@settl.app"
                className="h-11 rounded-md mt-1"
                {...register("email")}
              />
            </FormField>
            <FormField
              label="Password"
              rightElement={
                <Link
                  to={ROUTENAMES.FORGOT}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Forgot?
                </Link>
              }
              htmlFor="password"
              error={errors.password?.message}
            >
              <PasswordInput
                id="password"
                autoComplete="current-password"
                placeholder="••••••••"
                {...register("password")}
              />
            </FormField>
            {serviceError && (
              <div className="rounded-md border border-destructive/20 bg-destructive/10 p-2 mb-2">
                <p className="text-sm text-destructive text-center">
                  {serviceError}
                </p>
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-11 rounded-xl bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow"
            >
              {isSubmitting ? "Signing in..." : "Sign In"}
            </Button>
            <p className="mt-2 text-sm text-muted-foreground text-center">
              New here?&nbsp;
              <Link
                to={ROUTENAMES.SIGNUP}
                className="text-primary font-medium hover:underline"
              >
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
