import React from "react";
import PropTypes from "prop-types";

const ExpertiseCard = ({ expertiseList }) => {
  const renderExpertise = () => {
    if (!expertiseList || !Array.isArray(expertiseList)) {
      // Handling cases where expertiseList is undefined or not an array
      return <div>No Expertise data available</div>;
    }

    return expertiseList.map((expertise, index) => (
      <div className="">
        <div className="flex justify-between mb-1 " key={index}>
          <span className="text-xs text-gray-400">{expertise.title}</span>
          <span className="text-xs text-gray-400">{expertise.level}</span>
        </div>
        <div className="flex w-full mb-1 h-2.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
          <div
            className="flex flex-col justify-center overflow-hidden bg-blue-500 text-xs text-white text-center"
            role="progressbar"
            style={{ width: expertise.width }}
            aria-valuenow="57"
            aria-valuemin="0"
            aria-valuemax="100"
          >
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="card shadow-lg compact bg-app bg-base-200 cursor-pointer transition-transform transform duration-500 hover:scale-105  hover:bg-gradient-to-r hover:from-indigo-400 hover:via-purple-400 hover:to-pink-500 hover:text-[#fff]">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            <span className="text-accent opacity-70 mb-4">Expertise</span>
          </h5>
          <div className="flex flex-col space-y-4 mb-3">{renderExpertise()}</div>
        </div>
      </div>
    </div>
  );
};

ExpertiseCard.propTypes = {
  expertiseList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
    })
  ),
};

export default ExpertiseCard;
