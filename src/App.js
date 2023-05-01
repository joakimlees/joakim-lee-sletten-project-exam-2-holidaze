import "./App.css";
import React from "react";
import * as page from "./components/pages/index";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { MainNav } from "./components/MainNav";

function App() {
  return (
    <div>
      <MainNav />
      <Routes>
        <Route index element={<page.Home />} />
        <Route path="venues" element={<page.Venues />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
