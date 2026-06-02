import { FcGoogle } from "react-icons/fc";
import Button from "../../../shared/components/Button";
import { Input } from "../../../shared/components/Input";
import { Link } from "react-router-dom";
import { ROUTENAMES } from "../../../app/routes/routePaths";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, type SignupFormData } from "../schemas/signup.schema";
import FormField from "../../../shared/components/FormField";
import PasswordInput from "../../../shared/components/PasswordInput";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onTouched",
  });

  const createUser = (data: SignupFormData) => {
    console.log(data);
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
          <form onSubmit={handleSubmit(createUser)}>
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
