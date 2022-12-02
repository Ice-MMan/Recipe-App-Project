import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutDiv from "./About.style";

const About = () => {
  return (
    <AboutDiv className="container  ">
      <p className="text-center display-1 ">Mehmet Kaan UYSAL</p>
      <br /> <br />
      <p className="text-danger">
        Front-end Developer | HTML | CSS | JavaScript | Agile - Scrum - Kanban -
        Jira| Git | GitHub | Sass | Bootstrap
      </p>
      <h2 className="text-center display-6 p-5"> SPECİALS </h2>
    </AboutDiv>
  );
};

export default About;
