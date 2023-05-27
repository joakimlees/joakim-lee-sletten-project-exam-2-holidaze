import { Link } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useEffect, useState } from "react";

export function BurgerNav() {
  const [profile] = useLocalStorage("profile");
  const [profileName, setProfileName] = useState("");

  useEffect(() => {
    if (profile) {
      setProfileName(profile.name);
    }
  }, [profile]);

  return (
    <nav>
      <ul className="font-buttons font-normal text-base text-white sm:flex sm:flex-col">
        <div className="mb-10 border-t-2 pt-4 sm:hidden">
          <li className="my-2">
            <Link to="/">Home</Link>
          </li>
          <li className="my-2">
            <Link to="/venues">Venues</Link>
          </li>
        </div>

        <div className="mb-10 sm:border-t-2 sm:pt-4">
          <li className="my-2">
            <Link to="/about">About</Link>
          </li>
          <li className="my-2">
            <Link to="/contact">Contact</Link>
          </li>
        </div>
        <div className="mb-10 border-b-2 pb-4">
          <li className="my-2">
            <Link to={`/profiles/${profileName}`}>Profile</Link>
          </li>
          <li className="my-2">
            <Link to="/bookings">Bookings</Link>
          </li>
          <li className="my-2">
            <Link to="/manager">Manager</Link>
          </li>
        </div>

        <div className="text-center md:hidden">
          <li className="my-2">
            <Link to="/profile/login">Login</Link>
          </li>
          <li className="bg-secondary px-10 py-1 rounded-lg my-2">
            <Link to="/profile/register">Register</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
