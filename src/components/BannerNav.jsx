import { Link } from "react-router-dom";

export function BannerNav() {
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
            <Link>Login</Link>
          </li>
          <li className="bg-secondary px-10 py-1 rounded-lg">
            <Link>Register</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
