import React from "react";
import "./Intro.scss";
import workImage from "../../images/photo.png";

function Intro() {
  return (
    <section id="#intro-section">
      <div id="intro-container" className="section-container">
        <div id="intro-title-div">
          <img src={workImage} alt="Justin Bi" id="work-image"></img>
          <h1 id="intro-title">
            Justin <text className="text-primary">Bi</text>
          </h1>
        </div>
        <div className="section-content">
          <p>
            I am a senior studying computer science at Princeton University who
            is experienced in both web development and machine learning. Outside
            of computer science I enjoy rooting for underdog sports teams and
            periodically uploading to{" "}
            <a
              href="https://www.youtube.com/channel/UCFHt4vh_5FcyJ3U7qzFKxiQ"
              className="text-link"
            >
              my music YouTube channel
            </a>
            .
          </p>
          <p>
            At the moment, this site contains just this introduction and my
            Projects section. Stay tuned for more!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Intro;
