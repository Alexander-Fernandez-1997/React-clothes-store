import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// import { Navbar } from "../components/ui/Navbar";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<DashboardRoutes />} /> */}
        <Route path="/*" element={<DashboardRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
