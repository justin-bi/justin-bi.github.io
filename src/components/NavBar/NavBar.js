import React from "react";
import "./NavBar.scss";

// import BurgerMenu from "../BurgerMenu";
// import { useMediaPredicate } from "react-media-hook";
import workImage from "../../images/photo.png";

function NavBar() {
  // const isBootSm = !useMediaPredicate("(min-width: 768px)"); // < 768px

  return (
    <div className="nav-bar">
      <span className="home-link-group">
        <img src={workImage} alt="Justin Bi" id="nav-bar-work-image"></img>
        <span className="home-link-text">Justin Bi</span>
      </span>
      {/* {!isBootSm && (
        <div id="nav-link-group">
          Six Degrees of Separation Teammates Connection Game
        </div>
      )}
      {isBootSm && <BurgerMenu></BurgerMenu>} */}
    </div>
  );
}

export default NavBar;
