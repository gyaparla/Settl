import Label from "./Label";
import type { ReactNode } from "react";

type FormFieldProps = {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
  rightElement?: ReactNode;
};

const FormField = ({
  label,
  rightElement,
  htmlFor,
  error,
  children,
}: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <Label htmlFor={htmlFor}>{label}</Label>
        {rightElement}
      </div>
      {children}
      <div className="min-h-5 mt-1">
        {error && <p className="text-xs text-destructive">{error}</p>}
      </div>
    </div>
  );
};

export default FormField;
