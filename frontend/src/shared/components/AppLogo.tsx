import React from "react";
import { Link } from "react-router-dom";

const AppLogo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <span className="grid place-items-center w-8 h-8 rounded-xl bg-gradient-primary text-primary-foreground font-bold shadow-glow transition-transform group-hover:scale-105">
        S
      </span>
      <span className="text-lg font-semibold tracking-tight">Settl</span>
    </Link>
  );
};

export default AppLogo;
