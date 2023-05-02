import { MainNav } from "./MainNav";
import { Link } from "react-router-dom";
import logoLight from "../build/logo-light.svg";
import menu from "../build/icons/menu.svg";
import close from "../build/icons/close.svg";
import { useState } from "react";

export function Header() {
  const [navMenu, setNavMenu] = useState("hidden sm:flex");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [navIcon, setNavIcon] = useState(menu);

  function toggleMenu() {
    if (!isMenuClicked) {
      setNavMenu("hidden");
      setIsMenuClicked(true);
      setNavIcon(menu);
    } else if (isMenuClicked) {
      setNavMenu("block");
      setIsMenuClicked(false);
      setNavIcon(close);
    }
  }

  return (
    <header className="relative bg-primary py-3 px-2 flex">
      <div className="me-3">
        <img src={navIcon} alt="menu icon mobile/tablet" onClick={toggleMenu} />
      </div>
      <div className="w-28">
        <Link to="/">
          <img src={logoLight} alt="holidaze logo" />
        </Link>
      </div>
      <div className={navMenu}>
        <MainNav />
      </div>
    </header>
  );
}
