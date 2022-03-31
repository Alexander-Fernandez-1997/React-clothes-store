import React from "react";
import { CardShow } from "../components/CardShow";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const Show = () => {
  return (
    <>
      <Navbar />;
      <CardShow />
      <Footer />
    </>
  );
};
