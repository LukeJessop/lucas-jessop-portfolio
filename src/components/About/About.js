import React, { useEffect, useState } from "react";
import "./About.css";
import white from "../../assets/comicImages/white.png";
import cover from "../../assets/comicImages/cover.png";
import blue from "../../assets/comicImages/blue.png";
import yellow from "../../assets/comicImages/yellow.png";
import red from "../../assets/comicImages/red.png";
import HTMLFlipBook from "react-pageflip";
import monkidexImg from "../../assets/monkideximg.jpg";
import dndFindMe from "../../assets/dnd-find-me.jpeg";
import pokemon from "../../assets/pokemon.png";
import exploro from "../../assets/exploro.jpeg";

const aboutInfo = [
  {
    isProject: false,
    img: cover,
    desc: "",
  },
  {
    isProject: false,
    img: blue,
    desc: "",
  },
  {
    isProject: false,
    img: yellow,
    desc: "",
  },
  {
    isProject: false,
    img: red,
    desc: "",
  },
  {
    isProject: false,
    img: white,
    desc: "",
  },
  {
    isProject: true,
    title: "Monkidex",
    desc: "A website I made to give monkeys, and monkey lovers a social media outlet! Built by monkeys, for monkeys!",
    img: monkidexImg,
    href: "",
    videoLink: "https://www.youtube.com/watch?v=9QV4kVLnVXk",
  },
  {
    isProject: true,
    title: "DnD Find Me",
    desc: "I worked with a team in school to create an app that allows D&D players to find likeminded individuals to play D&D with",
    img: dndFindMe,
    href: "",
    videoLink: "",
  },
  {
    isProject: true,
    title: "Pokemon Fighters",
    desc: "I made a pokemon website that lets you catch and battle pokemon. Simple fun pokemon game!",
    img: pokemon,
    href: "http://pokemon-fighters.herokuapp.com/",
    videoLink: "",
  },
  {
    isProject: true,
    title: "Exploro",
    desc: "Exploro is a site that enables companies to advertise themselves on airplanes to passengers. This was my first industry job, I was a core piece in build this website. Most of the visual components you see were built by me!",
    img: exploro,
    href: "http://exploro.com",
    videoLink: "",
  },
];
const Page = React.forwardRef((props, ref) => {
  return (
    <div className="about-section" ref={ref}>
      {props.item.isProject ? (
        <div className="about-proj-container">
          <img alt="yellow" className="proj-img" src={props.item.img} />
          <div className="title-links-wrapper">
            <h2>
              <a href={props.item.href}>{props.item.title}</a>
            </h2>
            {props.item.videoLink && (
              <a href={props.item.videoLink}>Youtube Video Demo</a>
            )}
          </div>
          <p>{props.item.desc}</p>
        </div>
      ) : (
        <div className="about-img-container">
          <img alt="yellow" className="about-img" src={props.item.img} />
        </div>
      )}
    </div>
  );
});

function About() {
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [pageNum, setPageNum] = useState(0);
  const [translateXValue, setTranslateXValue] = useState("translateX(-17%)");

  useEffect(() => {
    if (pageNum > 0) {
      setIsBookOpen(true);
    } else {
      setIsBookOpen(false);
    }

    if (isBookOpen) {
      setTranslateXValue("translateX(0%)");
    } else {
      setTranslateXValue("translateX(-17%)");
    }
  }, [pageNum, isBookOpen]);

  return (
    <div className="about-wrapper" style={{ transform: translateXValue }}>
      <div className="about-container">
        <HTMLFlipBook
          width={700}
          height={700}
          showCover={true}
          onFlip={(e) => {
            setPageNum(e.data);
          }}
        >
          {aboutInfo.map((item, index) => {
            return <Page item={item} />;
          })}
        </HTMLFlipBook>
      </div>
    </div>
  );
}

export default About;
