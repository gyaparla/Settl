import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTENAMES } from "../../../app/routes/routePaths";
import Button from "../../../shared/components/Button";
import AppLogo from "../../../shared/components/AppLogo";
import ThemeToggle from "../../../shared/components/ThemeToggle";

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
      <nav className="flex justify-between items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16">
        {/* // Logo */}
        <AppLogo />
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <li className="hover:text-foreground transition-colors">
            <a href="#features">Features</a>
          </li>
          <li className="hover:text-foreground transition-colors">
            <a href="#how">How it works</a>
          </li>
          <li className="hover:text-foreground transition-colors">
            <a href="#use-cases">Use cases</a>
          </li>
          <li className="hover:text-foreground transition-colors">
            <a href="#faq">FAQ</a>
          </li>
          <li className="hover:text-foreground transition-colors">
            <a href="#">Blog</a>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            to={ROUTENAMES.LOGIN}
            className="hidden sm:inline text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-2"
          >
            Login
          </Link>
          <Button
            className="rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow"
            onClick={() => navigate(ROUTENAMES.SIGNUP)}
          >
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
