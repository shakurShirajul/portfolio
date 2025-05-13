import { useState } from "react";
import { Link } from "react-router";

const ProjectsCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Project Card */}
      <div className="card bg-base-100 w-96 shadow-sm rounded-xl border p-3.5">
        <figure className="rounded-xl border h-40">
          <img src={project.image} alt="Project Image" />
        </figure>
        <div className="card-body">
          <h2 className="text-xl font-semibold">
            <span>{project.name}</span>
            <span> ({project.tagline})</span>
          </h2>

          {/* Short Description */}
          {/* <p>{project.description}</p> */}

          {/* Tech Stack */}
          {/* <div>
            <p className="text-sm font-extrabold">Tech Stack</p>
            <div className="flex flex-wrap gap-1">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="badge bg-green-500 text-white">
                  {tech}
                </span>
              ))}
            </div>
          </div> */}

          {/* Features */}
          {/* <div>
            <h1 className="text-sm font-extrabold">Features</h1>
            <ul className="list-decimal ml-4">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div> */}

          {/* View More Button */}
          <button
            className="btn btn-sm mt-3"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            View More
          </button>
        </div>
      </div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <div className="space-y-2">
            <div>
              <p className="text-sm font-extrabold">Description:</p>
              <p>{project.description}</p>
            </div>
            <div>
              <p className="text-sm font-extrabold">Tech Stack</p>
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="badge bg-green-500 text-white">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h1 className="text-sm font-extrabold">Features</h1>
              <ul className="list-decimal ml-4">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="flex gap-2 items-center">
              <Link to={project.live} className="text-blue-800 underline">
                Live Link
              </Link>
              <Link to={project.client} className="text-blue-800 underline">
                Client Side Code
              </Link>
              <Link to={project.server} className="text-blue-800 underline">
                Server Side Code
              </Link>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default ProjectsCard;
