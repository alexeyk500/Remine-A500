import React from "react";
import classes from "./SearchComponent.module.css";
import search from "./../../images/search.svg";
import bell from "./../../images/bell.svg";
import query from "./../../images/query.svg";
import avatar from "./../../images/avatar.jpg";

const SearchComponent: React.FC = () => {
  return (
    <>
      <div className={classes.container}>
        <img src={search} alt="search ico" />
      </div>
      <div className={classes.bellContainer}>
        <img src={bell} alt="bell ico" />
      </div>
      <div className={classes.queryContainer}>
        <img src={query} alt="query ico" />
      </div>
      <div className={classes.avatarContainer}>
        <img src={avatar} alt="avatar ico" style={{borderRadius: '50%'}} />
      </div>
    </>
  );
};

export default SearchComponent;
