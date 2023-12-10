import { useState } from "react";
import { useParams } from "react-router-dom";

export default function SinglePost(props) {
  const { id } = useParams();
  const [currentProject, setCurrentProject] = useState(props.projects[id]);

  return (
    <main className="min-w-screen min-h-screen flex flex-col justify-center items-center bg-green-50">
      <div className="w-3/4 lg:w-2/3 h-fit lg:h-[55dvh] lg:flex justify-between items-center px-5 lg:py-10 bg-white rounded-md shadow-lg">
        <a href="https://www.google.com" target="_blank" className=" h-fit "><img src={currentProject.image} className="w-[900px] h-fit px-3 hover:contrast-50 before:content-[&gt]"/></a>
        <div className="mt-5">
        <h1 className="leading-5 text-2xl pb-2">{currentProject.name}</h1>
      <span className="block">
        <strong>Languages:</strong> {currentProject.languages}
      </span>
      <hr className="border-2 border-blue-950 rounded-md mt-3 mb-4"></hr>
      <p>{currentProject.description}</p>
      <div className="py-5 lg:py-2">
      <button className="mx-3 rounded-md border-2 px-3 py-1 hover:bg-blue-950 hover:text-white transition-colors">
            Github
          </button>
          <button className="rounded-md border-2 px-3 py-1 hover:bg-blue-950 hover:text-white transition-colors">
            Live Website
          </button>
      </div>
        </div>
     
    </div>
    </main>
  );
}
