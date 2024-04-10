/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center class-base-100 border-t-2 border-via-purple-500 to-pink-500 text-center text-white card  shadow-lg compact bg-base-300">
      <div className="container px-6 pt-6">
        <div className="mb-6 flex justify-center  ">
          <div class="flex justify-center space-x-5">
            
              <a
                href="https://facebook.com"  // write here your facebook link
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/fluent/30/000000/facebook-new.png"
                  alt=""
                  className="cursor-pointer transition-transform transform duration-500 hover:scale-125"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/sonpal-prajapati-486645247/"  // write here your linkedin link
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/fluent/30/000000/linkedin-2.png"
                  className="cursor-pointer transition-transform transform duration-500 hover:scale-125"
                  alt=""

                />
              </a>
              
             
             
              <a
                href="https://github.com/sonpal521?tab=repositories"   // write here your twitter link
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/fluent/30/000000/github"
                  className="cursor-pointer transition-transform transform duration-500 hover:scale-125"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
     
     
      <div
        className="w-full p-4 text-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        BuildBy:
        <a className="text-whitehite" href="#">
          ❤️ SP Themes
        </a>
      </div>
    </footer>
  );
};

export default Footer;
