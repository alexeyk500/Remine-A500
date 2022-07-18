import React from "react";
import classes from "./Preloader.module.css";

const Preloader: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.ldsSpinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Preloader;
