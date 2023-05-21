import { Header } from "./Header";
import { BreadCrumbs } from "./BreadCrumbs";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <BreadCrumbs />
      <Outlet />
      <Footer />
    </div>
  );
}
