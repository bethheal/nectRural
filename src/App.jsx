import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignupOption from "./pages/auth/signupOption";
import SignupPage from "./pages/auth/signupPage";
import NgoFormPage from "./pages/auth/ngoFormPage";
import InstitutionFormPage from "./pages/auth/institutionFormPage";
import Settings from "./pages/dashboard/settings";
import DashboardLayout from "./components/dashbaord/layout/index";
import Home from "./pages/dashboard/home/home";
import MainPage from "./pages/mainPage/mainPage";
import MainPageLayout from "./components/mainPage/mainPageLayout";
import Profile from "./pages/mainPage/profile";
import Post from "./pages/mainPage/post";
import LandingPage from "./pages/landingPage";
import LoginPage from "./pages/auth/loginPage";
import Notifications from "./pages/mainPage/notification";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "login",
      element: < LoginPage/>,
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
      element: <InstitutionFormPage />,
    },
    {
      path: "ngo-form",
      element: <NgoFormPage />,
    },
    {
      path: "dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
    {
      path: "mainPage",
      element: <MainPageLayout />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: "notifications",
          element: <Notifications />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "post",
          element: <Post />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
