import React from "react";
import classes from "./SelectorItem.module.css";
import expandBtn from './../../../../../../images/expandBtn.svg'

type PropsType = {
  selectorName: string;
};

const SelectorItem: React.FC<PropsType> = ({ selectorName }) => {
  return <div className={classes.container}>
    {selectorName}
    <img className={classes.expandBtn} src={expandBtn} alt="expandBtn ico"/>
  </div>;
};

export default SelectorItem;
