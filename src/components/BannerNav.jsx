import { Link } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useEffect, useState } from "react";

export function BannerNav() {
  const [profile, setProfile, removeProfile] = useLocalStorage("profile");

  const [token, setToken, removeToken] = useLocalStorage("token");
  const [userLoginText, setUserLoginText] = useState("Login");

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
      <ul className="flex justify-around font-buttons font-normal text-base text-white">
        <div className="flex w-full items-center">
          <li className="ms-10 me-16">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/venues">Venues</Link>
          </li>
        </div>
        <div className="hidden md:flex items-center">
          <li className="me-16">
            <Link to="/profile/login" onClick={handleUserLoginNav}>
              {userLoginText}
            </Link>
          </li>
          <li>
            <Link to="/profile/register" className="bg-secondary px-10 py-1 rounded-lg">
              Register
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
