import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer () {
   return  (
   <footer className="h-40 flex flex-col justify-evenly items-center shadow-lg shadow-black">
        <h1 className="text-xl underline font-title underline-offset-8">All rights served, @FoxyBrag Inc</h1>
        <div className="w-1/2 h-fit flex justify-center">
            <a href="https://www.google.com" target="_blank" rel="noreferrer" className="px-4 py-4 bg-white/50 shadow-lg rounded-full"><FontAwesomeIcon className="text-xl"icon={faFacebook}/></a>
            <a href="https://www.google.com" target="_blank" rel="noreferrer" className="px-4 py-4 mx-5 bg-white/50 shadow-lg rounded-full"><FontAwesomeIcon className="text-xl"icon={faInstagram}/></a>
            <a href="https://www.google.com" target="_blank" rel="noreferrer" className="px-4 py-4 bg-white/50 shadow-lg rounded-full"><FontAwesomeIcon className="text-xl"icon={faTwitter}/></a>
        </div>
    </footer>
    )
}