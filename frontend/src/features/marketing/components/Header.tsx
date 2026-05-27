import React from "react";
import { Link } from "react-router-dom";
import { ROUTENAMES } from "../../../app/routes/routePaths";

const menuItems = ["Features", "How it works", "Use cases", "FAQ"];

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md border-b">
      <nav className="flex justify-between items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16">
        <Link to={ROUTENAMES.HOME}>
          <h1>Settl</h1>
        </Link>
        <ul className="flex justify-center items-center gap-10">
          {menuItems.map((menu) => {
            return (
              <li>
                <Link to={menu}>{menu}</Link>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center items-center gap-3">
          <div>Theme</div>
          <Link to={ROUTENAMES.LOGIN}>Login</Link>
          <Link to={ROUTENAMES.SIGNUP}>Get Started</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
