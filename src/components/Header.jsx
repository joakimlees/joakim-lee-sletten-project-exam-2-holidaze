import { BurgerNav } from "./BurgerNav";
import { BannerNav } from "./BannerNav";
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
      setNavMenu("block z-40 bg-primary absolute top-14 left-0 px-3 w-80 py-10 sm:top-20");
      setIsMenuClicked(false);
      setNavIcon(close);
    }
  }

  return (
    <header className="relative bg-primary py-3 px-2 flex sm:py-5">
      <div className="me-3 w-16 sm:w-16">
        <img src={navIcon} alt="menu icon mobile/tablet" onClick={toggleMenu} className="w-full" />
      </div>
      <div className="w-28 sm:w-36">
        <Link to="/">
          <img src={logoLight} alt="holidaze logo" />
        </Link>
      </div>
      <div className="w-full">
        <BannerNav />
      </div>
      <div className={navMenu}>
        <BurgerNav />
      </div>
    </header>
  );
}
