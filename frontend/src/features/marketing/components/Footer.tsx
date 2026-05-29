import React from "react";
import AppLogo from "../../../shared/components/AppLogo";

const Footer: React.FC = () => {
  return (
    <footer className="border-t py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <AppLogo />
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Settl. Built with care in India.
        </p>
        <div className="flex items-center gap-5 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground">
            Privacy
          </a>
          <a href="#" className="hover:text-foreground">
            Terms
          </a>
          <a href="#" className="hover:text-foreground">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
