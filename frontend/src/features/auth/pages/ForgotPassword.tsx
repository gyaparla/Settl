import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Input } from "../../../shared/components/Input";
import { ROUTENAMES } from "../../../app/routes/routePaths";
import Button from "../../../shared/components/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  forgotPasswordSchema,
  type ForgotPasswordData,
} from "../schemas/forgot-password.scheme";
import FormField from "../../../shared/components/FormField";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordData>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onTouched",
  });

  const [sentResetLink, setSentResetLink] = useState(false);

  const requestForgotPasswordLink = (data: ForgotPasswordData) => {
    console.log(data);
    setSentResetLink(true);
  };
  return (
    <div className="flex-1 grid place-items-center p-6">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold tracking-tight">
          Forgot your password?
        </h1>
        <p className="mt-1.5 text-sm text-muted-foreground">
          We'll email you a secure reset link.
        </p>
        <div className="mt-8">
          {sentResetLink ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3 text-center py-4"
            >
              <div className="mx-auto grid place-items-center w-20 h-20 rounded-full bg-primary/10 text-primary">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-semibold">Check your inbox</h4>
              <p className="text-sm text-muted-foreground">
                We've sent reset instructions to&nbsp;
                <span className="font-medium text-foreground">
                  {getValues("email")}
                </span>
              </p>
            </motion.div>
          ) : (
            <form
              className="space-y-2"
              onSubmit={handleSubmit(requestForgotPasswordLink)}
            >
              <FormField
                label="Email"
                htmlFor="email"
                error={errors.email?.message}
              >
                <Input
                  id="fp-email"
                  type="email"
                  placeholder="you@settl.app"
                  className="h-11 rounded-md mt-1"
                  {...register("email")}
                />
              </FormField>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-11 rounded-xl bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow"
              >
                {isSubmitting ? "Sending..." : "Send reset link"}
              </Button>
            </form>
          )}
          <p className="mt-2 text-muted-foreground text-center">
            Remembered?&nbsp;
            <Link
              to={ROUTENAMES.LOGIN}
              className="text-primary font-medium hover:underline"
            >
              Back to Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
