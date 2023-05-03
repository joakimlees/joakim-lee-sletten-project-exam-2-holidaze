import { Link } from "react-router-dom";

export function BurgerNav() {
  return (
    <nav>
      <ul className="font-buttons font-normal text-base text-white sm:flex sm:flex-col">
        <div className="mb-10 sm:hidden">
          <li className="my-2">
            <Link to="/">Home</Link>
          </li>
          <li className="my-2">
            <Link to="/venues">Venues</Link>
          </li>
        </div>

        <div className="mb-10">
          <li className="my-2">
            <Link to="/about">About</Link>
          </li>
          <li className="my-2">
            <Link to="/contact">Contact</Link>
          </li>
        </div>

        <div className="mb-10">
          <li className="my-2">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="my-2">
            <Link to="/bookings">Bookings</Link>
          </li>
          <li className="my-2">
            <Link to="/manager">Manager</Link>
          </li>
        </div>

        <div className="text-center sm:hidden">
          <li className="my-2">
            <Link to="/login">Login</Link>
          </li>
          <li className="bg-secondary px-10 py-1 rounded-lg my-2">
            <Link to="/register">Register</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
