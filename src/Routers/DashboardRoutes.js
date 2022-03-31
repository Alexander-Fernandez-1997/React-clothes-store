import { Routes, Route } from "react-router-dom";
import { App } from "../App";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { AboutScreen } from "../Screens/AboutScreen";
import { ContactScreen } from "../Screens/ContactScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="home" element={<App />} />
        <Route path="about" element={<AboutScreen />} />
        <Route path="contact" element={<ContactScreen />} />

        <Route path="/" element={<App />} />
        <Route path="/*" element={<App />} />
      </Routes>

      <Footer />
    </>
  );
};
