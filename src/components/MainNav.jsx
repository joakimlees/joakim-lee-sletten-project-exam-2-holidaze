import { Link } from "react-router-dom";

export function MainNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/venues">Venues</Link>
        </li>
      </ul>
    </nav>
  );
}
