import { createBrowserRouter } from "react-router-dom";
import MarketingLayout from "../layouts/MarketingLayout";
import LandingPage from "../../features/marketing/pages/LandingPage";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../../features/auth/pages/LoginPage";
import SignUpPage from "../../features/auth/pages/SignUpPage";
import ForgotPassword from "../../features/auth/pages/ForgotPassword";
import AppLayout from "../layouts/AppLayout";
import UserDashboard from "../../features/dashboard/UserDashboard";

const router = createBrowserRouter([
  // Marketing Routes
  {
    element: <MarketingLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },

  // Authentication Routes
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
    ],
  },

  // Protected Routes
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      {
        path: "dashboard",
        element: <UserDashboard />,
      },
    ],
  },
]);

export default router;
