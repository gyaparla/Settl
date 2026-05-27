import { createBrowserRouter } from "react-router-dom";
import MarketingLayout from "../layouts/MarketingLayout";
import LandingPage from "../../features/marketing/pages/LandingPage";
import AuthLayout from "../layouts/AuthLayout";

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
        element: <h1>Login Pahe</h1>,
      },
      {
        path: "signup",
        element: <h1>Sign up Pahe</h1>,
      },
    ],
  },

  // Protected Routes
]);

export default router;
