import { useState } from "react";
import { Link } from "react-router-dom";

export default function Projects(props) {
  const [visible, setVisible] = useState(false);

  const projects = props.projects;
  const projectCards = projects
    .slice(0, visible ? 6 : 3)
    .map((project, index) => {
      return (
        <div
          key={index}
          className=" h-fit rounded-md bg-white overflow-hidden pb-4 hover:animate-[wiggle_1s_ease-in-out_infinite]"
        >
          <img className="w-full h-fit rounded-t-md mb-3" src={project.image} />
          <div className="px-2">
            <h3 className="text-lg md:text-2xl my-3">{project.name}</h3>
            <span className="block">
              <strong>Languages:</strong> {project.languages}
            </span>
            <Link to={`/projects/${index}`}>
              <button className="mt-3 mb-4 rounded-md bg-white border-2 border-blue-950 md:px-3 py-1 text-black">
                Go to project
              </button>
            </Link>
          </div>
        </div>
      );
    });
  return (
    <main className="min-w-screen min-h-screen flex items-center justify-center py-20  bg-green-50">
      <div className="w-3/4 flex flex-col justify-center ">
        <h1 className="text-xl pb-5 font-title font-semibold">Projects</h1>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 ">{projectCards}</div>
        <div className="text-center">
          <button
            className="my-4 rounded-md bg-blue-950 px-3 py-1 text-white"
            onClick={() => setVisible((prev) => !prev)}
          >
            See {visible ? "less" : "more"}
          </button>
        </div>
      </div>
    </main>
  );
}
