import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="www.linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="www.github.com" target="_blank">
        <FaGithub />
      </a>
      <a href="www.instagram.com" target="_blank"><PiInstagramLogoFill/></a>
    </div>
  );
};

export default HeaderSocials;
