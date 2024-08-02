import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import LoginPage from "./pages/auth/loginPage";
import SignupOption from "./pages/auth/signupOption";
import SignupPage from "./pages/auth/signupPage";
import NgoFormPage from "./pages/auth/ngoFormPage";
import InstitutionFormPage from "./pages/auth/institutionFormPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "signup",
      element: <SignupPage />,
    },

    {
      path: "signup-option",
      element: <SignupOption />,
    },
    {
      path: "institution-form",
      element: <InstitutionFormPage/>
    },
    {
      path: "ngo-form",
      element: <NgoFormPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
