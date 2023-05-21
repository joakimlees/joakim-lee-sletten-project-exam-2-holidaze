import { Link, useLocation } from "react-router-dom";

export function BreadCrumbs() {
  const location = useLocation();
  console.log(location);

  return (
    <nav>
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-5">
        <ul className="flex gap-2">
          <li>
            <Link>Hello</Link>
          </li>
          <li>
            <Link>Hello</Link>
          </li>
          <li>
            <Link>Hello</Link>
          </li>
          <li>
            <Link>Hello</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
