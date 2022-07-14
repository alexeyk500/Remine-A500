import React from "react";
import classes from "./NavBar.module.css";
import rightArrow from "./../../images/rightArrow.svg";

const NavBar: React.FC = () => {
  return (
    <div className={classes.container}>
      <img src={rightArrow} alt="rightArrow ico" />
    </div>
  );
};

export default NavBar;
