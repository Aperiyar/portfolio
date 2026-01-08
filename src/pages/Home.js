import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi There, I'm Periyarmani</h2>
        <div className="prompt">
          <p>
            Full Stack web developer with a passion for learning and creating.
          </p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>ReactJS, HTML, CSS, NPM, BootStrap, StyledComponents</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>Java script, NodeJS, ExpressJS, REST APIs, MongoDB</span>
          </li>
          <li className="item">
            <h2>Tools & Platforms</h2>
            <span>
              GitHub, VS Code, Postman, Netlify, Render, Browser DevTools
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
