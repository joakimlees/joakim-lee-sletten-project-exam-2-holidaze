import { MainNav } from "./MainNav";
import { Link } from "react-router-dom";
import logoLight from "../build/logo-light.svg";
import menu from "../build/icons/menu.svg";

export function Header() {
  return (
    <header className="relative bg-primary py-3 px-2 flex">
      <div>
        <img src={menu} alt="" />
      </div>
      <div className="w-28">
        <Link to="/">
          <img src={logoLight} alt="holidaze logo" />
        </Link>
      </div>
      <div className="">
        <MainNav />
      </div>
    </header>
  );
}
