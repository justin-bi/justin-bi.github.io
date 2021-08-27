import React from "react";
import "./Projects.scss";

import Button from "../Button";

import music21Report from "../../pdfs/written_final_report.pdf";
import breakoutReport from "../../pdfs/3d-breakout-report.pdf";

function Projects() {
  return (
    <section id="#projects-section">
      <div id="projects-container" className="section-container">
        <h2>Projects</h2>
        <div className="section-content">
          {/* NFL Projects */}
          <div className="project-div">
            <h3>NFL Projects</h3>
            <p>
              A React app that uses a self-built bipartite graph of NFL players
              and teams to implement six degrees of separation and display all
              the path of mutual teammates. There is also functionality to find
              all the teammates a player has ever had. More information can be
              found on the site's home page.
            </p>

            <div className="button-group">
              <Button
                value="Live"
                type="link"
                href="https://nfl-projects.herokuapp.com"
              />
              <Button
                value="GitHub"
                type="link"
                href="https://github.com/justin-bi/nfl-projects"
              />
            </div>
          </div>
          {/* Music21 */}
          <div className="project-div">
            <h3>Music21 Online</h3>
            <p>
              A site that makes some functionality of the musicology library
              music21 available online, presenting it in a intuitive and
              interesting manner such that people with less programming
              experience can still utilize the library. A small example project
              is included which uses k-means clustering to try and identify the
              publication years of undocumented Palestrina scores. The site's
              visualizations were created using D3.js.
            </p>

            <div className="button-group">
              <Button
                value="Live"
                type="link"
                href="https://music21-online.herokuapp.com/"
              />
              <Button value="Report" type="link" href={music21Report} />
            </div>
          </div>
          {/* 3D Breakout */}
          <div className="project-div">
            <h3>3D Breakout</h3>
            <p>
              An online game for my Computer Graphics course final group project
              which recreates the classic Atari Breakout game in 3D. Additional
              features included camera dependant multipliers and custom physics
              code. The game was written with Three.js.
            </p>

            <div className="button-group">
              <Button
                value="Live"
                type="link"
                href="https://justin-bi.github.io/3D-Breakout/"
              />
              <Button
                value="GitHub"
                type="link"
                href="https://github.com/justin-bi/3D-Breakout"
              />
              <Button value="Report" type="link" href={breakoutReport} />
            </div>
          </div>
          {/* Personal Website */}
          <div className="project-div">
            <h3>Personal Website</h3>
            <p>
              The website you're looking at right now! A React app deployed on
              GitHub pages, this site is intended to be a hub of information
              about myself. The vast majority of code and styling has been
              written by yours truly.
            </p>

            <div className="button-group">
              <Button
                value="GitHub"
                type="link"
                href="https://github.com/justin-bi/3D-Breakout"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
