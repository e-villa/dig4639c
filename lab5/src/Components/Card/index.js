import React from "react";
import "./index.css";

const Card = props => {
  const { periods } = props;
  console.log({ periods }.periods);
  return (
    <React.Fragment>
      {{ periods }.periods.map((period, index) => (
        <div className="card" key={index}>
          <div className="card-name-section">
            <h3 className="card-name-content">{period.name}</h3>
          </div>
          <div className="temperature-section">
            <span className="temperature">{period.temperature}</span>
            <span className="temperature-unit">{period.temperatureUnit}</span>
          </div>
          <div className="detailedForecast-section">
            <p className="details">{period.detailedForecast}</p>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Card;
