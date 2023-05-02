import { Link } from "react-router-dom";

export function MainNav() {
  return (
    <nav className="z-40 bg-primary absolute top-14 left-0 px-3">
      <ul className="font-buttons font-normal text-base text-white sm:flex">
        <li>
          <Link className="" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/venues">Venues</Link>
        </li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
