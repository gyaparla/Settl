import { Input } from "./Input";
import Button from "./Button";
import { Eye, EyeOff } from "lucide-react";
import React, { forwardRef, useState } from "react";
import { cn } from "../lib/utils";

type PasswordInputProps = React.ComponentProps<"input">;

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div className="mt-1 flex items-center border border-input shadow-md rounded-md focus-within:ring-1 focus-within:ring-ring">
        <Input
          ref={ref}
          type={showPassword ? "text" : "password"}
          className={cn(
            "border-none shadow-none h-11 focus-visible:ring-0",
            className,
          )}
          {...props}
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
    );
  },
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
