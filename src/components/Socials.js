import React from "react";
import { SiGmail } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitter, BsInstagram } from "react-icons/bs";
// {verticalsocials && <Socials verticalsocials={verticalsocials} />}

const Socials = ({ verticalsocials }) => {
  return (
    <div
      className={!verticalsocials ? `social-icons` : "social-icons-vertical"}
    >
      <div className={!verticalsocials ? `social-icons-c` : "social-icons-cv"}>
        <div
          className={!verticalsocials ? `social-icon` : "social-icon-vertical"}
        >
          <a href="/">
            {" "}
            <AiFillLinkedin />
          </a>
        </div>
        <div
          className={!verticalsocials ? `social-icon` : "social-icon-vertical"}
        >
          <a href="/">
            {" "}
            <SiGmail />
          </a>
        </div>
        <div
          className={!verticalsocials ? `social-icon` : "social-icon-vertical"}
        >
          <a href="/">
            {" "}
            <BsTwitter />
          </a>
        </div>
        <div
          className={!verticalsocials ? `social-icon` : "social-icon-vertical"}
        >
          <a href="/">
            {" "}
            <BsInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials;
