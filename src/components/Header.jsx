import { BurgerNav } from "./BurgerNav";
import { BannerNav } from "./BannerNav";
import { Link } from "react-router-dom";
import logoLight from "../build/logo-light.svg";
import menu from "../build/icons/menu.svg";
import close from "../build/icons/close.svg";
import { useEffect, useState } from "react";

export function Header() {
  const [navMenu, setNavMenu] = useState("hidden sm:flex");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [navIcon, setNavIcon] = useState(menu);

  function toggleMenu() {
    if (!isMenuClicked) {
      setIsMenuClicked(true);
    } else if (isMenuClicked) {
      setIsMenuClicked(false);
    }
  }

  useEffect(() => {
    if (!isMenuClicked) {
      setNavMenu("hidden");
      setNavIcon(menu);
    } else if (isMenuClicked) {
      setNavMenu("block z-40 bg-primary absolute top-12 left-0 px-3 sm:px-5 w-80 py-10 sm:top-16");
      setNavIcon(close);
    }
  }, [isMenuClicked]);

  return (
    <header className="bg-primary py-3 sm:py-6">
      <div className="flex relative items-center mx-auto max-w-screen-2xl px-3 sm:px-5">
        <div className="me-3 w-12 sm:w-16">
          <img src={navIcon} alt="menu icon mobile/tablet" onClick={toggleMenu} className="w-full" />
        </div>
        <div className="w-32 sm:w-40">
          <Link to="/">
            <img src={logoLight} alt="holidaze logo" />
          </Link>
        </div>
        <div className="hidden sm:block sm:w-full">
          <BannerNav />
        </div>
        <div className={navMenu}>
          <BurgerNav />
        </div>
      </div>
    </header>
  );
}
