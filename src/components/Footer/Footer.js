import React from "react";
import "./Footer.css";
import FooterButton from "../FooterButton/FooterButton";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <FooterButton isDownload={true}>Download My Resume</FooterButton>
        <FooterButton isDownload={false} link="https://www.linkedin.com/in/lucas-jessop-7861ab187/">LinkedIn</FooterButton>
        <FooterButton isDownload={false} link="https://www.youtube.com/@lucasjessop8407">Youtube Channel</FooterButton>
        <FooterButton isDownload={false} link="https://github.com/LukeJessop/">Github</FooterButton>
      </div>
    </div>
  );
}

export default Footer;
