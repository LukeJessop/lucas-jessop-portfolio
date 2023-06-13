import React from "react";

import "./Projects.css";

function Projects() {
  const projectsList = [
    {
      title: "Monkidex",
      description:
        "A website I made to give monkeys, and monkey lovers a social media outlet! Built by monkeys, for monkeys!",
      img: "",
      href: "",
      videoLink: "",
    },
    {
      title: "DnD Find Me",
      description:
        "I worked with a team in school to create an app that allows D&D players to find likeminded individuals to play D&D with",
      img: "",
      href: "",
      videoLink: "",
    },
    {
      title: "Pokemon Fighters",
      description:
        "I made a pokemon website that lets you catch and battle pokemon. Simple fun pokemon game!",
      img: "",
      href: "",
      videoLink: "",
    },
    {
      title: "Exploro",
      description:
        "Exploro is a site that enables companies to advertise themselves on airplanes to passengers. This was my first industry job, I was a core piece in build this website. Most of the visual components you see were built by me!",
      img: "",
      href: "",
      videoLink: "",
    },
  ];

  return (
    <div className="projects-wrapper">
      <div className="projects-container">
        <h1 className="projects-title">Projects</h1>
        <div className="projects-list-container">
          {projectsList.map((item, index) => {
            return (
              <div key={index} className="project-card-container">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
