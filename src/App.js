import "./App.css";
import React from "react";
import { Home } from "./components/pages";
import { Profile } from "./components/pages/profile";
import { Venues } from "./components/pages/venues";
import { Venue } from "./components/pages/venues/venue";
import { Booking } from "./components/pages/booking";
import { Register } from "./components/pages/profile/Register";
import { Login } from "./components/pages/profile/login";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { UserBookings } from "./components/pages/profile/bookings";

function App() {
  return (
    <div className="h-full">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="venues" element={<Venues />} />
          <Route path="venues/:id" element={<Venue />} />
          <Route path="booking/:id" element={<Booking />} />
          <Route path="profiles/:name" element={<Profile />} />
          <Route path="profile/register" element={<Register />} />
          <Route path="profile/login" element={<Login />} />
          <Route path="profiles/:name/bookings" element={<UserBookings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
