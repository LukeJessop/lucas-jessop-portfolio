import React from "react";
import "./FooterButton.css";
import ResumeDoc from "../../assets/Resume.pdf";
import downloadIcon from "../../assets/downloadIcon.png";
function FooterButton({ isDownload, link, children }) {
  return (
    <div className="resume-wrapper">
      <div className="resume-container">
        <a href={isDownload ? ResumeDoc : link} download="Lucas's Resume" className="resume-title">
          {isDownload && (
            <img
              className="download-button"
              alt="download"
              src={downloadIcon}
            />
          )}
          {children}
        </a>
      </div>
    </div>
  );
}

export default FooterButton;
