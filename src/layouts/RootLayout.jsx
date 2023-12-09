/* eslint-disable react/prop-types */
//import React from 'react'
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
