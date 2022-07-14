import React from "react";
import classes from "./NavBar.module.css";
import rightArrow from "./../../images/rightArrow.svg";

const NavBar: React.FC = () => {
  return (
    <div className={classes.container}>
      <button className={classes.btnExpand}>
        <img src={rightArrow} alt="rightArrow ico" />
      </button>
    </div>
  );
};

export default NavBar;
