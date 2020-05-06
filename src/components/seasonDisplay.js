import React from "react";
import { Icon } from "semantic-ui-react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "sinter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasoDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const text = season === "Winter" ? "Burr,it is chilly" : "Lets hit thr beach";
  const icon = season === "Winter" ? "snowflake" : "sun";
  return (
    <div className={`season-display ${season}`}>
      <Icon name={icon} size="massive" className="icon-left" />
      <h1> {text}</h1>
      <Icon name={icon} size="massive" className="icon-right" />
    </div>
  );
};

export default SeasoDisplay;
