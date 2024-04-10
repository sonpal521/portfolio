import PropTypes from "prop-types";
import { Fragment } from "react";
import { MdPublic, MdOutlineLock, MdOutlinePreview } from "react-icons/md";

import { BsGithub, BsInfoCircle } from "react-icons/bs";
import { isColorDark } from "../helpers/Utils";

const ProjectCard = ({ projectList, skillConfig }) => {
  const getRepoAccess = (project) => {
    if ("codeLink" in project && "liveLink" in project) {
      return <></>;
    } else {
      if (project.isPersonal) {
        return (
          <div className="flex text-primary-content mt-1">
            <BsInfoCircle className="my-auto mr-1 " />
            <span>Can show if required</span>
          </div>
        );
      } else {
        return (
          <div className="flex text-primary-content mt-1">
            <BsInfoCircle className="my-auto mr-1" />
            <span>External project</span>
          </div>
        );
      }
    }
  };

  const renderProjects = () => {
    return projectList.map((project, idx) => (
      <div
        className="card opacity-100 mt-3 shadow-lg compact bg-base-300
             cursor-pointer"
        key={idx}
      >
        <div className="flex justify-between flex-col p-8 h-full w-full">
          <div className="card   card-compact overflow-hidden   bg-base-100 shadow-xl mb-2">
            <figure>
              <img
                src={project.image}
                className="rounded-xl  object-cover w-full h-auto transform transition duration-1000 hover:scale-125"
                alt="Shoes"
              />
            </figure>
          </div>

          <div>
            <div className="flex items-center">
              <div className="card-title text-lg tracking-wide flex text-primary-focus">
                {project.isPublic ? (
                  <MdPublic className="my-auto text-primary-content" />
                ) : (
                  <MdOutlineLock className="my-auto" />
                )}
                <span>{project.title}</span>
              </div>
            </div>
            <p className="mb-1 mt-1 text-primary-content text-sm">
              {project.description}
            </p>
            <div className="flex flex-wrap">
              {project.skillsIds.map((skillId, idx) => (
                <span
                  key={idx}
                  className="m-1 pt-1 pb-1 pr-2 pl-2 text-xs rounded-md"
                  style={{
                    backgroundColor: skillConfig[skillId].color,
                    color: isColorDark(skillConfig[skillId].color)
                      ? "#ffffff"
                      : "#000000",
                  }}
                >
                  {skillConfig[skillId].name}
                </span>
              ))}
            </div>
          </div>
          <div className="flex mt-2 gap-2 justify-between text-sm text-primary-content">
            {project.codeLink === undefined ? (
              <></>
            ) : (
              <a
                href={project.codeLink}
                className="grow w-[50%] flex justify-center"
              >
                <button
                  className=" btn   grow w-[50%] bg-gradient-to-r from-yellow-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 flex justify-center sm:btn-sm md:btn-md border-2 p-1    "
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub size={25} />
                </button>
              </a>
            )}
            {project.liveLink === undefined ? (
              <></>
            ) : (
              <a
                href={project.liveLink}
                className="grow w-[50%] flex justify-center "
              >
                <button
                  className=" btn grow w-[50%] bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 "
                  target="_blank"
                  rel="noreferrer"
                >
                  <MdOutlinePreview size={25} />
                </button>
              </a>
            )}
          </div>
          {getRepoAccess(project)}
        </div>
      </div>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-200 shadow">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    <span className="text-accent opacity-70">Projects</span>
                  </h5>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {renderProjects()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ProjectCard.propTypes = {
  projectList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      isPublic: PropTypes.bool.isRequired,
      isPersonal: PropTypes.bool,
      codeLink: PropTypes.string,
      liveLink: PropTypes.string,
      skillsIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  skillConfig: PropTypes.object.isRequired,
};

export default ProjectCard;
