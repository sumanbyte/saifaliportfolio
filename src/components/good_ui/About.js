import React from "react";
import ChangeUIButton from "./ChangeUIButton";
import Socials from "./Socials";

const About = ({ verticalsocials }) => {
  return (
    <>
      <ChangeUIButton />
      {verticalsocials && <Socials verticalsocials={verticalsocials} />}
      <div className="about-section">
        <div className="about-section-content">
          <div className="about-image">
            <img src={require("../../img/about-image.png")} alt="" />
          </div>
          <div className="about-text scroll">
            <p>
              Hello and welcome to my portfolio. My name is Mohammad Saif Ali
              and I am a UX/UI Designer currently studying BCA.
            </p>
            <br />
            <p>
              I have a passion for creating intiutive and user friendly designs
              that solve real-world problems. I have a strong foundation in
              design principles and user-centered approaches, and i am
              constantly learning and improving my skills.
            </p>
            <br />
            <p>
              While I am currently a student and do not yet have professional
              experience in UX/UI design. I have had the opportunity to work on
              design projects as part of my studies. I have also gained valuable
              experience through internships and extracurricular activities.
            </p>
            <br />
            <p>
              I am excited about the opportunity to apply my skills and
              knowledge to a professional setting and believe that i can make a
              valuable contribution to any team.
            </p>
            <br />
            <p>
              Thank you for visiting my portfolio. I hope you enjoy my work and
              I look forward to the opportunity to learn and grow as a designer.
            </p>
          </div>
        </div>
        <div className="about-education">
          <div className="txt-education">
            <p>Education</p>
          </div>
          <div className="crosswork">
            <div className="verti-bar"></div>
            <div className="hori-bar-cont">

              <div className="hori-bars">
                <p>2018 </p>
                <div className="hori-bar"></div>
                <p>2021 &#91;Diploma in Computer Science&#93;</p>
              </div>
              <div className="hori-bars">
                <p>2022 </p>
                <div className="hori-bar"></div>
                <p>2021 &#91;Bachelor in Computer Application&#93;</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
