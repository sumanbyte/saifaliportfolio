import React from "react";
import ChangeUIButton from "../good_ui/ChangeUIButton";
import BadSocials from "./Bad_Socials"

const About = ({ verticalsocials }) => {
  return (
    <>
      <ChangeUIButton />
      {verticalsocials && <BadSocials verticalsocials={verticalsocials} />}
      <div className="about-section">
        <div className="about-section-content align-center">
          <div className="about-image">
            <img src={require("../../img/bad_about-image.png")} alt="" />
          </div>
          <div className="bad_about-text">
            <p className="bad-font">
              I am a product designer who is motivated to provide original, considerate, human-centered design solutions for a range of clientele. I like using my personal interests in numerous design mediums as inspiration to solve difficulties. a self-driven starter who performs best in hectic situations. I encourage and support ideation and innovation by working closely with stakeholders and digital peers to translate ideas into products. keeps critical thinking at a high level and thinks quickly without sacrificing the details.

            </p>

          </div>
        </div>
        <div className="bad_about-education">
          <div className="bad_txt-education">
            <p className="bad-font">Education</p>
          </div>
          <div className="bad_crosswork">
            <div className="bad_verti-bar"></div>
            <div className="bad_hori-bar-cont">

              <div className="bad_hori-bars">
                <p className="bad-font">2018 </p>
                <div className="bad_hori-bar"></div>
                <p className="bad-font">2021 &#91;Diploma in Computer Science&#93;</p>
              </div>
              <div className="hori-bars">
                <p className="bad-font">2022 </p>
                <div className="bad_hori-bar"></div>
                <p className="bad-font">2021 &#91;Bachelor in Computer Application&#93;</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
