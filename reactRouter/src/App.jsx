import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="mt-8 px-8">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
