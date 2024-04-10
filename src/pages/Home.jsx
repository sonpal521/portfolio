import React, { Fragment, useEffect, useState } from "react";
import "../index.css";
import ThemeCard from "../components/ThemeCard";

// import ExperienceCard from "../components/ExperienceCard";
import ProjectCard from "../components/ProjectCard";
import PropTypes from "prop-types";

import { HelmetProvider } from "react-helmet-async";
import AvatarCard from "../components/AvatarCard";
import SkillCard from "../components/SkillCard";
import themeConfig from "../config/theme.config.json";
import skillConfig from "../config/skill.config.json";
import userData from "../data/user.data.json";
import ContactFormCard from "../components/ContactFormCard";

import ExpertiseCard from "../components/ExpertiseCard";
import Footer from "../components/Footer";
import RelevelCertificate from "../components/RelevelCertificate";
// import ParticleBackground from "../components/Animation/ParticleBackground";

const Home = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const previousTheme = localStorage.getItem("app-theme") || "";
    if (previousTheme === "") {
      setTheme(themeConfig.default);
    } else {
      setTheme(previousTheme);
    }
  });

  useEffect(() => {
    theme && document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <HelmetProvider>
      <div className="fade-in h-screen">
        <Fragment>
          <div className={`p-4 lg:p-10 min-h-full bg-base-100`}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-box">
              <div className="col-span-1">
                <div className="grid grid-cols-1 gap-6">
                  <ThemeCard
                    theme={theme}
                    setTheme={setTheme}
                    themeConfig={themeConfig}
                  />
                  <AvatarCard
                    basicDetails={userData["basic"]}
                    skillConfig={skillConfig}
                  />
                  <ExpertiseCard expertiseList={userData["experties"]} />

                  <SkillCard skillList={userData["skill"]}
                  skillConfig={skillConfig} />
                  <ContactFormCard />
                </div>
              </div>
              <div className="lg:col-span-2 mb-10 col-span-1">
                <div className="grid grid-cols-1 gap-6">
                  <ProjectCard
                    projectList={userData["projects"]}
                    skillConfig={skillConfig}
                  />
                </div>
                <div className="mt-5">
                <RelevelCertificate/>
                </div>
                
              </div>
              
            </div>
          </div>
        </Fragment>
        <Footer />
      </div>
      {/* <Footer/> */}
    </HelmetProvider>
  );
};

Home.propTypes = {
  themeConfig: PropTypes.object.isRequired,
  skillConfig: PropTypes.object.isRequired,
  expertiseList: PropTypes.object.isRequired,

  userData: PropTypes.object.isRequired,
};

export default Home;
