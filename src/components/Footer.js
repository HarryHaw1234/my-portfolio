import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer () {
   return  (
   <footer className="h-40 flex flex-col justify-evenly items-center shadow-lg shadow-black">
        <h1 className="text-md md:text-xl underline font-title underline-offset-8">All rights served, @FoxyBrag Inc</h1>
        <div className="w-1/2 h-fit flex justify-evenly">
            <div className="px-2 py-2 md:px-4 md:py-4 bg-white/50 shadow-lg rounded-full"><a href="https://www.google.com" target="_blank" rel="noreferrer"><FontAwesomeIcon className="text-xl"icon={faFacebook}/></a></div>
            <div className="px-2 py-2 md:px-4 md:py-4 bg-white/50 shadow-lg rounded-full"><a href="https://www.google.com" target="_blank" rel="noreferrer"><FontAwesomeIcon className="text-xl"icon={faInstagram}/></a></div>
            <div className="px-2 py-2 md:px-4 md:py-4 bg-white/50 shadow-lg rounded-full"><a href="https://www.google.com" target="_blank" rel="noreferrer"><FontAwesomeIcon className="text-xl"icon={faTwitter}/></a></div>
        </div>
    </footer>
    )
}