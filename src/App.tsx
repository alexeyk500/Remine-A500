import React from "react";
import classes from "./App.module.css";
import Header from "./commonComponents/Header/Header";

function App() {
  return (
    <div className={classes.appContainer}>
      <Header />
      <div className={classes.title}>Hello Redmine</div>
      <div className={classes.title}>Привет Рэдмайн</div>
    </div>
  );
}

export default App;
