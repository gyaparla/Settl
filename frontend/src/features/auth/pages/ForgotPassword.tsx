import { Link } from "react-router-dom";
import Button from "../../../shared/components/Button";
import { Input } from "../../../shared/components/Input";
import Label from "../../../shared/components/Label";
import { ROUTENAMES } from "../../../app/routes/routePaths";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [sentResetLink, setSentResetLink] = useState(false);
  return (
    <div className="flex-1 grid place-items-center p-6">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold tracking-tight">
          Forgot your password ?
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
                <span className="font-medium text-foreground">{email}</span>
              </p>
            </motion.div>
          ) : (
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fp-email">Email</Label>
                <Input
                  id="fp-email"
                  type="email"
                  required
                  placeholder="you@settl.app"
                  className="h-11 rounded-md mt-1"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-11 rounded-xl bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow"
              >
                Send reset link
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
