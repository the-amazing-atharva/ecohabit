/**
 *To avoid bloated App.js component, page routes created at this component.
 */

import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";

import MainLayout from "./MainLayout/MainLayout";
import Homepage from "../pages/Homepage";
import LocationsPage from "../pages/LocationsPage";
import ErrorPage from "../pages/ErrorPage";
import GuidesPage from "../pages/GuidesPage";
import AboutPage from "../pages/AboutPage";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import TermsConditionPage from "../pages/TermsConditionPage";

/*
 * Creating routes via createBrowserRouter method makes project ready for react-router-dom 6.4 data fetching.
 * MainLayout component has common items like navbar and footer.
 */

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
      <Route index element={<Homepage />} />
      <Route path="/homepage" element={<Navigate replace to="/" />} />
      <Route path="/locations" element={<LocationsPage />} />
      <Route path="/guides" element={<GuidesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/terms" element={<TermsConditionPage />} />
    </Route>
  )
);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
