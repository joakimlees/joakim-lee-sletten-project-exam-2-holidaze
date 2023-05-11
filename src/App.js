import "./App.css";
import React from "react";
import * as page from "./components/pages/index";
import { Register } from "./components/pages/profile/Register";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

function App() {
  return (
    <div className="h-full">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<page.Home />} />
          <Route path="venues" element={<page.Venues />} />
          <Route path="profile/register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
