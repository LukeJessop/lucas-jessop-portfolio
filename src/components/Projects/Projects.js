import React from "react";

import "./Projects.css";

import monkidexImg from "../../assets/monkideximg.jpg";
import dndFindMe from "../../assets/dnd-find-me.jpeg";
import pokemon from "../../assets/pokemon.png";
import exploro from "../../assets/exploro.jpeg";

import YoutubeIcon from '../../assets/youtubeIcon.svg'

function Projects() {
  const projectsList = [
    {
      title: "Monkidex",
      description:
        "A website I made to give monkeys, and monkey lovers a social media outlet! Built by monkeys, for monkeys!",
      img: monkidexImg,
      href: "",
      videoLink: "https://www.youtube.com/watch?v=9QV4kVLnVXk",
    },
    {
      title: "DnD Find Me",
      description:
        "I worked with a team in school to create an app that allows D&D players to find likeminded individuals to play D&D with",
      img: dndFindMe,
      href: "",
      videoLink: "",
    },
    {
      title: "Pokemon Fighters",
      description:
        "I made a pokemon website that lets you catch and battle pokemon. Simple fun pokemon game!",
      img: pokemon,
      href: "http://pokemon-fighters.herokuapp.com/",
      videoLink: "",
    },
    {
      title: "Exploro",
      description:
        "Exploro is a site that enables companies to advertise themselves on airplanes to passengers. This was my first industry job, I was a core piece in build this website. Most of the visual components you see were built by me!",
      img: exploro,
      href: "http://exploro.com",
      videoLink: "",
    },
  ];

  console.log(YoutubeIcon)

  return (
    <div className="projects-wrapper">
      <div className="projects-container">
        <h1 className="projects-title">Projects</h1>
        <div className="projects-list-container">
          {projectsList.map((item, index) => {
            return (
              <div key={index} className="project-card-container">
                <a className="img-link" href={item.href} target="_blank" rel="noreferrer">
                  <img className="card-image" alt="project" src={item.img} />
                </a>
                <div className="card-info-wrapper">
                  <a href={item.href} target="_blank" rel="noreferrer">
                    <h3 className="card-title">{item.title}</h3>
                  </a>
                  <p className="card-desc">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
