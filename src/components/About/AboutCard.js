import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hi everyone, I am <span className="purple">Ramachandra Reddy Pothireddy </span>
          a passionate aspiring software developer from <span className="purple"> AndhraPradesh, India.</span>
            <br />
            I am actively seeking opportunities as a fresher software developer.
            <br />
            I recently completed my B.Tech in Computer Science and Engineering at Sri Satyanarayana Engineering College (SSNEC), Ongole.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        <footer className="blockquote-footer">Ramachandra Reddy Pothireddy</footer> 
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
