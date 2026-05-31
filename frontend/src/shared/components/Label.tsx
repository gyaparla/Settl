import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

const lableVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

const Label = ({ className, ...props }: LabelProps) => {
  return (
    <label htmlFor="" className={cn(lableVariants(), className)} {...props} />
  );
};

export default Label;
