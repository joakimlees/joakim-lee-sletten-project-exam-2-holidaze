import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
