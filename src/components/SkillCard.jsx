import PropTypes from "prop-types";
import { isColorDark } from "../helpers/Utils";

const SkillCard = ({ skillList , skillConfig}) => {
  // Check if skillList or skillConfig is undefined or null
  console.log("skillList:", skillList);
  if (!Array.isArray(skillList) || Object.keys(skillConfig).length === 0) {
    return null; // or handle the empty state as needed
  }

  return (
    <>
      <div className="card shadow-lg compact bg-app bg-base-200 transition-transform transform duration-500 hover:scale-105  hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <div className="card-body">
          <div className="mx-3">
            <h5 className="card-title">
              <span className="text-accent opacity-70">Skills</span>
            </h5>
          </div>
          <div className="p-3 flow-root">
            {skillList.map((skill, idx) => (
              <div key={idx} className={idx === 0 ? "mt-0" : "mt-2"}>
                <div className="flex flex-wrap justify-center text-primary-content text-opacity-60">
                  {skill.title}
                </div>
                <div className="-m-1 flex flex-wrap justify-center items-center mt-1">
                  {skill.skillIdList.map((skillId, idx) => (
                    <div
                      key={idx}
                      className="tooltip tooltip-accent"
                      data-tip={skillConfig[skillId]?.name || ""}
                    >
                      {skillConfig[skillId]?.slug === undefined ? (
                        <span
                          key={idx}
                          className="m-1 p-1 text-xs rounded-md"
                          style={{
                            backgroundColor: skillConfig[skillId]?.color || "",
                            color: isColorDark(skillConfig[skillId]?.color)
                              ? "#ffffff"
                              : "#000000",
                          }}
                        >
                          {skillConfig[skillId]?.name || ""}
                        </span>
                      ) : (
                        <img
                          className="m-1"
                          height="25"
                          width="25"
                          src={`https://cdn.simpleicons.org/${skillConfig[skillId]?.slug}/${skillConfig[skillId]?.color}`}
                          alt=""
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

SkillCard.propTypes = {
  skillList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      skillIdList: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired
  ).isRequired,
  skillConfig: PropTypes.object.isRequired,
};

export default SkillCard;
