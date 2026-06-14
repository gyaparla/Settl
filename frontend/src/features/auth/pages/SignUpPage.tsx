import { FcGoogle } from "react-icons/fc";
import Button from "../../../shared/components/Button";
import { Input } from "../../../shared/components/Input";
import { Link, useNavigate } from "react-router-dom";
import { ROUTENAMES } from "../../../app/routes/routePaths";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, type SignupFormValues } from "../schemas/signup.schema";
import FormField from "../../../shared/components/FormField";
import PasswordInput from "../../../shared/components/PasswordInput";
import { registerUser } from "../services/auth.service";
import axios from "axios";
import { useState } from "react";

const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    mode: "onTouched",
  });

  const [serviceError, setServiceError] = useState("");

  const handleSignup = async (userData: SignupFormValues) => {
    try {
      setServiceError("");
      const data = await registerUser(userData);
      console.log("User data ==>", data);
      alert(data?.message);
      navigate(ROUTENAMES.LOGIN);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message ||
          error.message ||
          "Something went wrong";
        setServiceError(message);
        console.log(error);
      }
    }
  };
  return (
    <div className="flex-1 grid place-items-center p-6">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold leading-tight">
          Create your account
        </h1>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Free forever. No card needed
        </p>
        <div className="mt-8">
          <form onSubmit={handleSubmit(handleSignup)}>
            <Button
              type="button"
              variant="outline"
              className="w-full rounded-xl h-11 flex items-center justify-center gap-3"
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
              label="Full name"
              htmlFor="name"
              error={errors.name?.message}
            >
              <Input
                id="name"
                autoComplete="name"
                type="text"
                placeholder="Your name"
                className="mt-1 h-11 rounded-md"
                {...register("name")}
              />
            </FormField>
            <FormField
              label="Email"
              htmlFor="email"
              error={errors.email?.message}
            >
              <Input
                id="email"
                autoComplete="email"
                type="email"
                placeholder="you@settl.app"
                className="mt-1 h-11 rounded-md"
                {...register("email")}
              />
            </FormField>
            <FormField
              label="Password"
              htmlFor="password"
              error={errors.password?.message}
            >
              <PasswordInput
                id="password"
                autoComplete="new-password"
                placeholder="••••••••"
                {...register("password")}
              />
            </FormField>
            {serviceError && (
              <div className=" rounded-md border border-destructive/20 bg-destructive/10 p-2 mb-2">
                <p className="text-sm text-destructive text-center">
                  {serviceError}
                </p>
              </div>
            )}
            <div className="space-y-2 mt-1">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-11 rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow"
              >
                {isSubmitting ? "Creating..." : "Create account"}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                By signing up you agree to our Terms & Privacy.
              </p>
              <p className="text-center text-muted-foreground text-sm">
                Already have an account?&nbsp;
                <Link
                  to={ROUTENAMES.LOGIN}
                  className="text-primary font-medium hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
