import React from "react";
import "./FooterButton.css";
import ResumeDoc from "../../assets/Resume.pdf";
function FooterButton({ isDownload, link, children }) {
  return (
    <div className="resume-wrapper">
      <div className="resume-container">
        <a target="__blank" rel="noreferrer" href={isDownload ? ResumeDoc : link} download="Lucas's Resume" className="resume-title">
          {children}
        </a>
      </div>
    </div>
  );
}

export default FooterButton;
