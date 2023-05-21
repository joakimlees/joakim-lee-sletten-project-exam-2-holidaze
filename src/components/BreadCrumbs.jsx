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
        <li className="font-buttons text-sm text-dark after:content-['|']" key={crumb}>
          <Link to={currentLink}>{crumb + " "}</Link>
        </li>
      );
    });

  return (
    <nav>
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-5">
        <ul className="flex gap-2 [&>*:last-child]:text-primary [&>*:last-child]:after:content-['']">{crumbs}</ul>
      </div>
    </nav>
  );
}
