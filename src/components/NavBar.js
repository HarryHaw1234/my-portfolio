import { NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";

export default function NavBar(props) {
  return (
    <header className="fixed top-0 left-0 z-50 bg-green-50 container min-w-full min-h-fit ">
        <nav className="flex justify-around items-center">
          <NavLink
            to={"/"}
            className="py-4 px-3 text-2xl lg:text-3xl font-bold tracking-widest font-title"
          >
            FoxyBrag
          </NavLink>
          <div className="hidden lg:block">
            <NavLink
              to={"/projects"}
              className={({ isActive }) => [
                isActive
                  ? "px-3 py-2 mr-3 h-full bg-blue-950 text-white hover:animate-pulse"
                  : "px-3 py-2 mr-3 h-full hover:bg-blue-950 hover:text-white",
              ]}
            >
              Projects
            </NavLink>
            <NavLink
              to={"/posts"}
              className={({ isActive }) => [
                isActive
                  ? "px-3 py-2 mr-3 h-full bg-blue-950 text-white hover:animate-pulse"
                  : "px-3 py-2 mr-3 h-full hover:bg-blue-950 hover:text-white",
              ]}
            >
              Posts
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) => [
                isActive
                  ? "px-3 py-2 h-full bg-blue-950 text-white hover:animate-pulse"
                  : "px-3 py-2 h-full hover:bg-blue-950 hover:text-white",
              ]}
            >
              About
            </NavLink>

          </div>
          <MobileNav containerStyle = {" relative transition-all lg:hidden "} isActive = {props.navbarIsActive} setIsActive = {props.setIsActive}/>
        </nav>
    </header>
  );
}
