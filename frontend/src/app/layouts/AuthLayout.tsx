import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen">
      <h1>Auth layout</h1>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
