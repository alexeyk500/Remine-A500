import React from "react";
import classes from "./App.module.css";
import Header from "./commonComponents/Header/Header";
import NavBar from "./commonComponents/NavBar/NavBar";
import TimeSheetPage from "./pages/TimeSheetPage/TimeSheetPage";

function App() {
  return (
    <div className={classes.appContainer}>
      <Header />
      <div className={classes.mainContainer}>
        <NavBar />
        <TimeSheetPage />
      </div>
    </div>
  );
}

export default App;
