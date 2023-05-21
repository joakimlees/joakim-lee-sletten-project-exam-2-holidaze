import { Link, useLocation } from "react-router-dom";

export function BreadCrumbs() {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter(crumb => crumb !== "")
    .map(crumb => {
      currentLink = +`/${crumb}`;

      return (
        <li className="" key={crumb}>
          <Link to={currentLink}>{"| " + crumb}</Link>
        </li>
      );
    });

  return (
    <nav>
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-5">
        <ul className="flex gap-2">{crumbs}</ul>
      </div>
    </nav>
  );
}
