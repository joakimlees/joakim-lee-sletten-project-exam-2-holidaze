import "./App.css";
import React from "react";
import { Home } from "./components/pages";
import { Profile } from "./components/pages/profile";
import { Venues } from "./components/pages/venues";
import { Venue } from "./components/pages/venues/venue";
import { Register } from "./components/pages/profile/Register";
import { Login } from "./components/pages/profile/login";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

function App() {
  return (
    <div className="h-full">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="venues" element={<Venues />} />
          <Route path="venues/:id" element={<Venue />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/register" element={<Register />} />
          <Route path="profile/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
