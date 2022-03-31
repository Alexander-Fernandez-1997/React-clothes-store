import { Routes, Route } from "react-router-dom";
import { App } from "../App";
import { Footer } from "../components/Footer";

import { Navbar } from "../components/ui/Navbar";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="home" element={<App />} />

          <Route path="/" element={<App />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
