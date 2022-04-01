import { Routes, Route } from "react-router-dom";
import { App } from "../App";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { AboutScreen } from "../Screens/AboutScreen";
import { BlogScreen } from "../Screens/BlogScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="home" element={<App />} />
        <Route path="about" element={<AboutScreen />} />
        <Route path="blog" element={<BlogScreen />} />

        <Route path="/" element={<App />} />
        <Route path="/*" element={<App />} />
      </Routes>

      <Footer />
    </>
  );
};
