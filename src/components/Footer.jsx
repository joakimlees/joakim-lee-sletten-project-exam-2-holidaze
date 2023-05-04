import { Link } from "react-router-dom";
import logoLight from "../build/logo-light.svg";

export function Footer() {
  return (
    <footer className="bg-primary py-14">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-5">
        <div className="mb-10 w-20 sm:w-24">
          <Link to="/">
            <img src={logoLight} alt="holidaze logo" />
          </Link>
        </div>
        <ul className="text-base text-white">
          <li className="my-2">
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
