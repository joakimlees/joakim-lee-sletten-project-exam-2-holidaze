import { Link } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useEffect, useState } from "react";

export function BurgerNav() {
  const [profile, setProfile, removeProfile] = useLocalStorage("profile");
  const [profileName, setProfileName] = useState("");
  const [token, setToken, removeToken] = useLocalStorage("token");
  const [userLoginText, setUserLoginText] = useState("Login");
  const [profileLink, setProfileLink] = useState("");
  const [managerLink, setManagerLink] = useState("");
  const [bookingsLink, setBookingsLink] = useState("");

  useEffect(() => {
    if (profile) {
      setProfileName(profile.name);
    }
  }, [profile]);

  useEffect(() => {
    if (profile.name) {
      setProfileLink(`/profiles/${profileName}`);
      setBookingsLink(`/profiles/${profileName}/bookings`);
    } else if (!profile.name) {
      setProfileLink("/profile/login");
      setBookingsLink("/profiles/login");
    }
  }, [profileName, profile.name]);

  useEffect(() => {
    if (profile.venueManager) {
      setManagerLink("/profiles/manager");
    } else if (!profile.venueManager) {
      setManagerLink(`/profiles/${profileName}`);
    }
  }, [profileName, profile.venueManager]);

  useEffect(() => {
    if (token) {
      setUserLoginText("Logout");
    } else if (!token) {
      setUserLoginText("Login");
    }
  }, [token, profile]);

  function handleUserLoginNav() {
    if (token) {
      removeToken();
      removeProfile();
      setUserLoginText("Login");
    } else if (!token) {
      setToken("");
      setProfile("");
    }
  }

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
            <Link to={profileLink}>Profile</Link>
          </li>
          <li className="my-2">
            <Link to={bookingsLink}>Bookings</Link>
          </li>
          <li className="my-2">
            <Link to={managerLink}>Manager</Link>
          </li>
        </div>
        <div className="text-center md:hidden">
          <li className="my-2">
            <Link to="/profile/login" onClick={handleUserLoginNav}>
              {userLoginText}
            </Link>
          </li>
          <li className="bg-secondary px-10 py-1 rounded-lg my-2">
            <Link to="/profile/register">Register</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
