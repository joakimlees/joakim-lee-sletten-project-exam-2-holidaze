import { Link } from "react-router-dom";

export function MainNav() {
  return (
    <nav className="bg-primary absolute">
      <ul className="font-buttons font-normal text-white">
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
