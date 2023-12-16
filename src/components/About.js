import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faAddressBook,
  faBarsStaggered,
  faPhoneVolume
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <main className="flex flex-col justify-center content-evenly flex-wrap min-w-screen min-h-screen py-20 md:py-32">
      <div className="md:flex justify-around items-center w-[90%] mx-auto">
        <div className=" mb-8 md:w-1/3">
          <span className="font-title text-xl ">
            <FontAwesomeIcon
              icon={faBarsStaggered}
              className="text-xl text-blue-200"
            />{" "}
            Hi Guys
          </span>
          <p className="text-3xl font-para my-3">
            Let's start <br></br>work with me!
          </p>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
            massa egestas mollis varius; dignissim elementum. Mollis tincidunt m
          </p>
        </div>
        <div className="md:w-1/3">
          <img src="/about.svg" alt="About SVG" />
        </div>
      </div>
      <div className="md:flex justify-around items-center flex-wrap w-[90%] mt-7">
        <div className="w-[90%] md:w-1/3 mx-auto md:mx-0">
          <div className="flex items-center py-7 ">
            <FontAwesomeIcon icon={faPhoneVolume} className="text-blue-950 text-xl mr-auto" />
            <span>+95 343897382</span>
          </div>
          <div className="flex items-center py-7">
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-950 text-xl mr-auto" />
            <span>anonymous@gmail.com</span>
          </div>
          <div className="flex  items-center py-7">
            <FontAwesomeIcon icon={faAddressBook} className="text-blue-950 text-xl mr-auto" />
            <span>No.100, Pyay Road, Yangon</span>
          </div>
        </div>
        <div className="md:w-1/3 gap-3">
          <p className="text-md font-para py-3">
            {" "}
            Write to me if you are interested!
          </p>
          <form className="flex flex-col gap-4 text-center">
            <input
              type="text"
              placeholder="Your name"
              className="border-2 border-blue-950 rounded-md w-full py-2 px-2"
            />
            <input
              type="email"
              placeholder="Your email"
              className="border-2 border-blue-950 rounded-md w-full py-2 px-2"
            />
            <textarea
              placeholder="Your description"
              className="border-2 border-blue-950 rounded-md w-full py-3 px-2"
            />
            <button className="rounded-md border-2 px-3 py-1 bg-blue-950 text-white hover:bg-white hover:text-blue-950 transition-colors">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
