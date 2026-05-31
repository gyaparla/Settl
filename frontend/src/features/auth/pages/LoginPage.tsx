import Button from "../../../shared/components/Button";
import { FcGoogle } from "react-icons/fc";
import Label from "../../../shared/components/Label";
import { Input } from "../../../shared/components/Input";
import { Link } from "react-router-dom";
import { ROUTENAMES } from "../../../app/routes/routePaths";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="flex-1 grid place-items-center p-6">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
        <p className="mt-1.5 text-sm text-muted-foreground">
          log in to keep your balances in check
        </p>
        <div className="mt-8">
          <form className="space-y-4">
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
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="your@settl.app"
                className="h-11 rounded-md mt-1"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  to={ROUTENAMES.FORGOT}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Forgot?
                </Link>
              </div>
              <div className="mt-1 flex items-center border border-input shadow-md rounded-md focus-within:ring-1 focus-within:ring-ring">
                <Input
                  id="password"
                  autoComplete="new-password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="border-none shadow-none h-11 focus-visible:ring-0"
                />
                <Button
                  type="button"
                  variant="ghost"
                  className="shrink-0 px-3 hover:bg-transparent"
                  onClick={handleShowPassword}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </Button>
              </div>
            </div>
            <p className="text-xs text-destructive">Error Message</p>
            <Button
              type="submit"
              className="w-full h-11 rounded-xl bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow"
            >
              Login
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
