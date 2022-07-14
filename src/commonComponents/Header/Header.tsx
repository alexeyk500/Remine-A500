import React from "react";
import classes from "./Header.module.css";
import SearchComponent from "../SearchComponent/SearchComponent";

const Header: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>ИСУП</div>
      <div className={classes.rightColumn}>
        <SearchComponent />
      </div>
    </div>
  );
};

export default Header;
