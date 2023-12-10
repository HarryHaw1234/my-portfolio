import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export default function MobileNav(props) {
  return (
    <div className={props.containerStyle}>
      <FontAwesomeIcon
        icon={faBars}
        onClick={() => props.setIsActive((bol) => !bol)}
        className="text-lg px-3 py-2 border-2 rounded-md border-slate-800"
      />
      <div
        className={`fixed top-0 ${
          props.isActive ? "right-0" : "right-full"
        } w-screen z-40 min-h-screen  bg-white/50 transition-all`}
      >
        <div className="flex flex-col  w-full bg-green-50 h-screen border-green-100">
          <div className="flex justify-around items-center pb-3">
            <NavLink
              to={"/"}
              className="text-xl py-4 px-3 md:text-3xl font-bold tracking-widest font-title"
              onClick={() => props.setIsActive((bol) => !bol)}
            >
              FoxyBrag
            </NavLink>
            <FontAwesomeIcon
                icon={faXmark}
                onClick={() => props.setIsActive((bol) => !bol)}
                className="text-lg px-3 py-2 border-2 rounded-md border-slate-800"
              />
          </div>
          <NavLink
            to={"/projects"}
            className={({ isActive }) => [
              isActive
                ? "px-3 py-3  bg-blue-950 text-white hover:animate-pulse"
                : "px-3 py-3  hover:bg-blue-950 hover:text-white",
            ]}
            onClick={() => props.setIsActive((bol) => !bol)}
          >
            Projects
          </NavLink>
          <NavLink
            to={"/posts"}
            className={({ isActive }) => [
              isActive
                ? "px-3 py-3  bg-blue-950 text-white hover:animate-pulse"
                : "px-3 py-3  hover:bg-blue-950 hover:text-white",
            ]}
            onClick={() => props.setIsActive((bol) => !bol)}
          >
            Posts
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) => [
              isActive
                ? "px-3 py-3  bg-blue-950 text-white hover:animate-pulse"
                : "px-3 py-3  hover:bg-blue-950 hover:text-white",
            ]}
            onClick={() => props.setIsActive((bol) => !bol)}
          >
            About
          </NavLink>
          <div className="text-center w-full mt-auto">
      <span className="mt-auto">@FoxyBrag Developer</span>

          </div>

        </div>
      </div>
    </div>
  );
}
