import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeFirstPage() {
  return (
    <div className="home-first-page px-5 gap-10 text-center flex justify-center flex-wrap content-center lg:flex-nowrap lg:justify-evenly items-center bg-green-50 min-h-screen min-w-full">
      <img src="/freelancer.svg" alt="Freelancer" className=" md:w-2/4  lg:w-2/4 mx-auto my-7 lg:mx-2" />
      <div className="w-full lg:w-1/2 mx-auto flex justify-center">
        <div className="w-80 border-2 px-8 py-5 relative">
          <FontAwesomeIcon
            icon={faCommentDots}
            className="w-10 h-10 md:w-12 md:h-12 text-slate-700 absolute -top-4 -left-4"
          />
          <span className="text-lg md:text-2xl font-semibold italic text-center text-slate-900">
            Hi Guys, <br className="my-2" /> I'm Htoo Aung Win, a person trying
            to be
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r from-cyan-500 to-blue-500 relative inline-block px-2 m-1">
              <span className="relative text-white">a software engineer!</span>
            </span>
            Have dedicated in this career
          </span>
        </div>
      </div>
    </div>
  );
}
