/* eslint-disable jsx-a11y/alt-text */
import PropTypes from "prop-types";
import { skeleton } from "../helpers/Utils";
// import Avatar from "../assets/image/avatar.jpg"
import TypeAnimation from "./Animation/TypeAnimation";

const AvatarCard = ({ basicDetails, skillConfig }) => {
  return (
    <div className="card opacity-100 shadow-lg compact bg-base-200  transition-transform transform duration-500 hover:scale-105  hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:text-[#fff]">
      <div className="grid place-items-center py-8">
        <div className="avatar opacity-90">
          <div className="mb-8 rounded-full w-32 h-32 ring ring-accent ring-offset-base-100 ring-offset-2">
         
              <img src="https://i.ibb.co/nggwLD5/Whats-App-Image-2024-04-04-at-7-58-21-PM.jpg" alt=""  placeholder={skeleton({
                  width: "w-full",
                  height: "h-full",
                  shape: "",
                })}
                className = "hover:scale-110"/>
          </div>
        </div>
        <div className="text-center mx-auto px-8">
          <h5 className="font-bold text-2xl">
            <span className="text-accent">{basicDetails.name}</span>
          </h5>
          <div className="mt-3 text-primary-content text-opacity-60 font-mono">
            {basicDetails.bio}
            <TypeAnimation />
          </div>
        </div>
        <div className="flex flex-wrap justify-center mt-2">
          {basicDetails.socials.map((social, idx) => (
            <a key={idx} href={social.link} target="_blank" rel="noreferrer">
              <img
                className="m-1"
                height="25"
                width="25"
                src={`https://cdn.simpleicons.org/${
                  skillConfig[social.skillId].slug
                }/${skillConfig[social.skillId].color}`}
              />
            </a>
          ))}
        </div>
        <a
          href={basicDetails.resumeLink}
          target="_blank"
          className="btn btn-outline btn-sm text-xs mt-2 hover:scale-110 text-accent hover:bg-[#47CAD7] hover:text-[#fff] "
          download
          rel="noreferrer"
        >
          <span class="relative flex h-4 w-4">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-100"></span>
            <span class="relative inline-flex rounded-full h-4 w-4 bg-sky-500"></span>
          </span>
          View Resume
        </a>
      </div>
    </div>
  );
};

AvatarCard.propTypes = {
  basicDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired,
    resumeLink: PropTypes.string.isRequired,
    linkedInLink: PropTypes.string.isRequired,
    gitHubLink: PropTypes.string.isRequired,
    socials: PropTypes.arrayOf(
      PropTypes.shape({
        skillId: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
  skillConfig: PropTypes.object,
};

export default AvatarCard;
