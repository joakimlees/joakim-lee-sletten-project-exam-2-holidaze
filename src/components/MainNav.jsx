import { Link } from "react-router-dom";

export function MainNav() {
  return (
    <nav className="z-40 bg-primary absolute top-14 left-0 px-3">
      <ul className="font-buttons font-normal text-base text-white sm:flex">
        <div>
          <li>
            <Link className="" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/venues">Venues</Link>
          </li>
        </div>
        <div>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </div>
        <div>
          <li>
            <Link>Profile</Link>
          </li>
          <li>
            <Link>Bookings</Link>
          </li>
          <li>
            <Link>Manager</Link>
          </li>
        </div>
        <div>
          <li>
            <Link>Login</Link>
          </li>
          <li>
            <Link>Register</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
